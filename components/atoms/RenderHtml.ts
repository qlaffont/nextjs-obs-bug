export const RenderHtml = (value) => value?.replace(/(?:\r\n|\r|\n)/g, '<br>') || '';
