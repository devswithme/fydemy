import { getChannels } from "@/actions/payment";
import dynamic from "next/dynamic";

const Pay = dynamic(() => import("@/components/pay"), { ssr: false });

const Page = async () => {
  const { data: channels } = await getChannels();

  return <Pay channels={channels} />;
};

export default Page;
