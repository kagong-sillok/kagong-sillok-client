import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

const global = css`
  ${emotionReset};
`;

export default function GlobalStyle() {
  return <Global styles={global} />;
}
