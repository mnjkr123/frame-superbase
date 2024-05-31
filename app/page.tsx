import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTMR92YEXTMQspi2mxgni44jcbpnn672QMgakNKa2jVSG/0.jpg`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'SuperBase',
  description: 'A frame about the launch of SuperBase Token and NFTs',
  openGraph: {
    title: 'SuperBase',
    description: 'A frame about the launch of SuperBase Token and NFTs',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTMR92YEXTMQspi2mxgni44jcbpnn672QMgakNKa2jVSG/0.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>SuperBase</h1>
    </>
  );
}