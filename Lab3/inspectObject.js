
function inspectObject(iface) {
    return Object.entries(iface)
      .filter(([key, value]) => typeof value === 'function')
      .map(([key, func]) => [key, func.length]);
  }
  