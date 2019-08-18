# Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3000/api/v1/shows` | GET | not needed | Array of all shows: `[{ id: 12, title: 'Friends', date: 'August 18, 2019', tv_source: 'Netflix', cover_image: 'https://friends.com', characters: [{}] }]` |
| `http://localhost:3001/api/v1/shows/:id/characters/:show_id` | GET | not needed | Array of one specific character: `[{ id: 12, show_name: 'Friends', char_name: 'Rachel', ethnicity: 'American', name: 'Jennifer Anniston' }]` |
| `http://localhost:3001/api/v1/shows/:id` | GET | not needed | Array of one specific show: `[{ id: 12, title: 'Friends', date: 'August 18, 2019', tv_source: 'Netflix', cover_image: 'https://friends.com' }]` |
| `http://localhost:3001/api/v1/shows/:id/characters` | GET | not needed | Array of characters for one specific show: `[{ id: 12, show_name: 'Friends', char_name: 'Rachel', ethnicity: 'American', name: 'Jennifer Anniston' }]` |
| `http://localhost:3001/api/v1/shows` | POST |`{title: <String>, date: <String>, tv_source: <String>, cover_image: <String>, characters: <String>}` | New show: `{ id: 12, title: 'Friends', date: 'August 18, 2019', tv_source: 'Netflix', cover_image: 'https://friends.com', characters: [{}] }` |
| `http://localhost:3001/api/v1/shows/:id/characters` | POST |`{show_name: <String>, char_name: <String>, ethnicity: <String>, name: <String>}` | New character: `{ id: 12, show_name: 'Friends', char_name: 'Rachel', ethnicity: 'American', name: 'Jennifer Anniston' }` |

Note: All of these endpoints will return semantic errors if something is wrong with the request.

