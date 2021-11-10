function hexToRGB(x, base) {
    const parsed = parseInt(x, base);
    console.log(parsed)
    let r = (parsed >> 16) & 255;
    console.log('soy r ', r)
    let g = (parsed >> 8) & 255;
    console.log('soy g ', g)
    let b = parsed & 255;
    console.log('soy b ', b)
    return r + ',' + g + ',' + b;
  }
  
  console.log(hexToRGB('0xff0000', 16));
