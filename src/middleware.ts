import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const maintenanceMode = import.meta.env.MAINTENANCE_MODE === 'true';

  if (maintenanceMode && context.url.pathname !== '/mantenimiento') {
    return context.redirect('/mantenimiento');
  }

  return next();
});