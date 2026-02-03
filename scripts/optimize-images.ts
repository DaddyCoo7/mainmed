import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];
const SIZES = [400, 800, 1200, 1600]; // Responsive image sizes

interface ImageStats {
  processed: number;
  failed: number;
  totalSizeBefore: number;
  totalSizeAfter: number;
}

const stats: ImageStats = {
  processed: 0,
  failed: 0,
  totalSizeBefore: 0,
  totalSizeAfter: 0
};

async function optimizeImage(filePath: string): Promise<void> {
  const ext = path.extname(filePath).toLowerCase();

  if (!IMAGE_EXTENSIONS.includes(ext)) {
    return;
  }

  try {
    const originalStats = fs.statSync(filePath);
    stats.totalSizeBefore += originalStats.size;

    const dir = path.dirname(filePath);
    const filename = path.basename(filePath, ext);

    // Generate WebP version at original size
    const webpPath = path.join(dir, `${filename}.webp`);
    await sharp(filePath)
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);

    // Generate responsive sizes for images larger than 400px
    const metadata = await sharp(filePath).metadata();
    if (metadata.width && metadata.width > 400) {
      for (const size of SIZES) {
        if (metadata.width > size) {
          const responsiveWebpPath = path.join(dir, `${filename}-${size}w.webp`);
          await sharp(filePath)
            .resize(size, null, { withoutEnlargement: true })
            .webp({ quality: 85, effort: 6 })
            .toFile(responsiveWebpPath);
        }
      }
    }

    // Optimize original JPG/PNG
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(filePath)
        .jpeg({ quality: 85, progressive: true, mozjpeg: true })
        .toFile(filePath + '.tmp');
    } else if (ext === '.png') {
      await sharp(filePath)
        .png({ quality: 85, compressionLevel: 9 })
        .toFile(filePath + '.tmp');
    }

    // Replace original with optimized version
    if (fs.existsSync(filePath + '.tmp')) {
      fs.renameSync(filePath + '.tmp', filePath);
    }

    const newStats = fs.statSync(filePath);
    const webpStats = fs.statSync(webpPath);
    stats.totalSizeAfter += newStats.size + webpStats.size;

    stats.processed++;
    console.log(`✓ Optimized: ${path.relative(PUBLIC_DIR, filePath)}`);
    console.log(`  Original: ${(originalStats.size / 1024).toFixed(2)}KB → ${(newStats.size / 1024).toFixed(2)}KB`);
    console.log(`  WebP: ${(webpStats.size / 1024).toFixed(2)}KB`);

  } catch (error) {
    stats.failed++;
    console.error(`✗ Failed to optimize: ${filePath}`, error);
  }
}

async function processDirectory(dir: string): Promise<void> {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      await optimizeImage(fullPath);
    }
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');
  console.log(`Processing images in: ${PUBLIC_DIR}\n`);

  await processDirectory(PUBLIC_DIR);

  console.log('\n📊 Optimization Summary:');
  console.log(`✓ Processed: ${stats.processed} images`);
  console.log(`✗ Failed: ${stats.failed} images`);
  console.log(`📦 Size before: ${(stats.totalSizeBefore / 1024 / 1024).toFixed(2)}MB`);
  console.log(`📦 Size after: ${(stats.totalSizeAfter / 1024 / 1024).toFixed(2)}MB`);

  const savings = ((1 - stats.totalSizeAfter / stats.totalSizeBefore) * 100);
  if (savings > 0) {
    console.log(`💰 Savings: ${savings.toFixed(2)}%`);
  }
}

main().catch(console.error);
