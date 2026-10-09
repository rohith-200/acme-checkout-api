# acme-checkout-api

**Intentionally vulnerable demo. Do not deploy.**

This small Express app exists only as a test target for ThreatWatch. It pins old dependency versions with known vulnerabilities on purpose:

- `lodash@4.17.15`, used unsafely in `src/routes/settings.js` (expected: likely affected)
- `minimist@1.2.5`, installed but never imported (expected: potentially affected)
- `express`, current version, used normally (expected: not affected)

The `add-jwt-auth` branch adds `jsonwebtoken@8.5.1` and a login route that verifies tokens from the request.

Run locally with `npm install` and `npm start`.