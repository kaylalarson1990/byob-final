# End points:

## GET for all shows:
app.get('/api/v1/shows')

## GET for all characters:
app.get('/api/v1/characters')

## GET for shows with specific id:
app.get('/api/v1/shows/:id')

## GET for shows with specific id and their characters:
app.get('/api/v1/show/:id/characters')

