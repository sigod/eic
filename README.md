# EIC

Simple module for [verification][1] of [Energy Identification Codes][0] (EIC).

## Installation
```
npm install eic
```

## API

#### verifyEIC(string)
```js
EIC.verifyEIC('21Z000000000163R'); // true
EIC.verifyEIC('21z000000000163r'); // false
```

#### generateEICCheckDigit(string)
```js
EIC.generateEICCheckDigit('21Z000000000163'); // 'R'
EIC.generateEICCheckDigit('21Z00000000016'); // undefined
```

## License
MIT



[0]: https://en.wikipedia.org/wiki/Energy_Identification_Code
[1]: https://www.entsoe.eu/fileadmin/user_upload/edi/library/eic/EIC_Key_generator.htm
