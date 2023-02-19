import {Link, useLoaderData} from "@remix-run/react";
import {json} from "@remix-run/cloudflare";

export const loader = async () => {
    const uuid = await fetch("https://uuid.rocks/plain").then(
        async (response) => await response.text()
    );

    return json({ok: true, uuid});
};
export default function Index() {
    const data = useLoaderData<typeof loader>()


    return (
        <div>
            <div>테스팅 사이트</div>

            <Link to={`/${data.uuid}`}>
                <button>이동</button>
            </Link>
        </div>
    );
}
