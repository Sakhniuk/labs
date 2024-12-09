
function convertIpToNumber(ip = '127.0.0.1') {
    return ip.split('.')
      .map((byte, index) => {
        byte = parseInt(byte, 10);
        switch (index) {
          case 0: return byte << 24;
          case 1: return byte << 16;
          case 2: return byte << 8;
          default: return byte;
        }
      })
      .reduce((acc, byte) => acc + byte, 0);
  }
  