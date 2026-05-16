# greenfarming.vn Site Map

Target: `https://www.greenfarming.vn/`

## Cloned Routes

| URL | Local route | Discovery source | Family | Notes |
| --- | --- | --- | --- | --- |
| `https://www.greenfarming.vn/` | `/` | Header, logo, Statistics nav | Statistics/marketing | Public homepage with hero, features, map, charts |
| `https://www.greenfarming.vn/app` | `/app` | Header CTA | Protected app | Live site redirects to `/login`; clone uses requested mock dashboard |
| `https://www.greenfarming.vn/about-us` | `/about-us` | Header nav | About | Sponsors, partners, experts, impact |
| `https://www.greenfarming.vn/architecture` | `/architecture` | Header nav | Technology | System architecture and monitoring subsystems |
| `https://www.greenfarming.vn/frequently-asked-questions` | `/frequently-asked-questions` | Header nav | FAQ | Accordion interaction |
| `https://www.greenfarming.vn/feedback` | `/feedback` | Header nav | Feedback | Seven-step feedback wizard |
| `https://www.greenfarming.vn/login` | `/login` | Header auth | Auth | Static demo form |
| `https://www.greenfarming.vn/signup` | `/signup` | Header auth | Auth | Static demo form |

## Skipped

- External `leafletjs.com` attribution link.
- Real backend authentication, private account state, and server APIs.
- Google Maps runtime integration; clone uses local public assets and mock interactions.
