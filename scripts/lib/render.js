function renderString(template, data) {
  return template.replace(/\{\{\s*([A-Z0-9_]+)\s*\}\}/g, (match, key) => {
    if (Object.prototype.hasOwnProperty.call(data, key)) return String(data[key]);
    return match;
  });
}

function findUnresolvedPlaceholders(text) {
  const matches = text.match(/\{\{\s*[A-Z0-9_]+\s*\}\}/g);
  return Array.from(new Set(matches ?? []));
}

module.exports = {
  renderString,
  findUnresolvedPlaceholders,
};

function renderString(template, data) {
  return template.replace(/\{\{\s*([A-Z0-9_]+)\s*\}\}/g, (match, key) => {
    if (Object.prototype.hasOwnProperty.call(data, key)) return String(data[key]);
    return match;
  });
}

function findUnresolvedPlaceholders(text) {
  const matches = text.match(/\{\{\s*[A-Z0-9_]+\s*\}\}/g);
  return Array.from(new Set(matches ?? []));
}

module.exports = {
  renderString,
  findUnresolvedPlaceholders,
};

