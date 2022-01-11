module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ee205cd2f533132a812045a55e9a7a83'),
  },
});
