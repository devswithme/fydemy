import { getChannels } from "@/actions/payment";
import Pay from "@/components/pay";

const Page = async () => {
  const { data: channels } = await getChannels();

  return <Pay channels={channels} />;
};

export default Page;
