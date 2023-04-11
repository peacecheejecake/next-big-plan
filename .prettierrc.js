/**
 * Prettier 옵션
 * - https://prettier.io/docs/en/options.html
 */
module.exports = {
    printWidth: 80,
    tabWidth: 2,
    useTabs: true,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true, // 중괄호 내에 공백 사용
    arrowParens: 'always', // 화살표 함수 단일 인자에 괄호 포함 여부
    proseWrap: 'never', // 마크다운 포매팅 제외
    endOfLine: 'auto', // 개행문자 유지 (혼합일 경우, 첫 줄 개행문자로 통일)
    jsxBracketSameLine: false, // JSX의 닫는 괄호를 줄바꿈 할건지
    range: {
        rangeStart: 0,
        rangeEnd: Infinity,
    },
    htmlWhitespaceSensitivity: 'css', // https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting
    endOfLine: 'auto'
  };
