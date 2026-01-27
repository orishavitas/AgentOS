# Security Review Checklist

- [ ] Secrets are not in repo
- [ ] OAuth scopes minimized and documented (ADR)
- [ ] Input validation & sanitization for all user/tool inputs
- [ ] Prompt injection mitigations (treat tool output as untrusted)
- [ ] Rate limiting / abuse controls
- [ ] Logging avoids PII
- [ ] Dependency vulnerabilities checked
