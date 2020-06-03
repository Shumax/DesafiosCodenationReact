export const config = {
  spotify: {
    authorizationURL: 'https://accounts.spotify.com/authorize',
    clientId: 'bbc8621ac2074b0ba5a1bb8220d71a1d',
    redirectUrl: `${window.location.origin}/authorize`,
    webAPI: 'https://api.spotify.com/v1',
    scopes: [
      'user-read-email',
      'user-read-private',
      'streaming'
    ]
  }
}
