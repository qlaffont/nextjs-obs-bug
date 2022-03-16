export const getProfilePicture = (url: string, placeholderName: string): string =>
  url || `https://source.boringavatars.com/marble/120/${(placeholderName + '').replace(' ', '%20')}`;
