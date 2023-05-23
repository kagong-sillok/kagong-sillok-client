/* eslint-disable @next/next/no-before-interactive-script-outside-document */
'use client';

import Script from 'next/script';
import { Map } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_API_KEY}&autoload=false`;

const KakaoMap = () => {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ minWidth: '360px', minHeight: '100vh' }}
      ></Map>
    </>
  );
};

export default KakaoMap;
