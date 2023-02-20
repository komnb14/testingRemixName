import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/cloudflare";
import getUuid from "@/lib/server-api/uuid.server";

export const loader = async () => {
  const uuid = await getUuid();
  return json({ uuid });
};
export default function Index() {
  const { uuid } = useLoaderData<typeof loader>();

  return (
    <div>
      <div>테스팅 사이트</div>

      <Link to={`/${uuid}`}>
        <button>이동</button>
      </Link>
    </div>
  );
}
