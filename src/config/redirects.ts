export interface RedirectRule {
  from: string;
  to: string;
  exact?: boolean;
}

export const redirectRules: RedirectRule[] = [
  {
    from: '/blog',
    to: '/resources',
    exact: true
  },
  {
    from: '/comprehensive-audit',
    to: '/services/compliance-hipaa-audits',
    exact: true
  },
  {
    from: '/audit-request',
    to: '/services/compliance-hipaa-audits',
    exact: true
  },
  {
    from: '/services/appointment-scheduling',
    to: '/services/call-center-scheduling',
    exact: true
  },
  {
    from: '/hello-world',
    to: '/',
    exact: true
  },
  {
    from: '/developments',
    to: '/about',
    exact: true
  },
  {
    from: '/specialties/hematology',
    to: '/specialties/hematology',
    exact: true
  },
  {
    from: '/specialties/cardiology',
    to: '/specialties/cardiology',
    exact: true
  },
  {
    from: '/specialties/geriatrics',
    to: '/specialties/geriatrics',
    exact: true
  },
  {
    from: '/specialties/nephrology',
    to: '/specialties/nephrology',
    exact: true
  }
];
