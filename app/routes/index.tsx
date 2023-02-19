import {Link, useLoaderData} from "@remix-run/react";
import {json} from "@remix-run/cloudflare";

export const loader = async () => {
  const uuid = await fetch("https://uuid.rocks/plain").then(
      async (response) => await response.text()
  );

  return json({ ok: true,uuid });
};
export default function Index() {
  const data = useLoaderData<typeof loader>()


  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Link to={`/${data.uuid}`}>{data.uuid}</Link>
    </div>
  );
}
