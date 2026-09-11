export const ROUTES = ['home', 'committee', 'events', 'sponsorship'] as const;
export type Route = (typeof ROUTES)[number];
export const DEFAULT_ROUTE: Route = 'home';
