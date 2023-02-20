import {Link, useLoaderData} from "@remix-run/react";
import {json} from "@remix-run/cloudflare";
import {marked} from "marked";

export const loader = async () => {
    const uuid = await fetch("https://uuid.rocks/plain").then(
        async (response) => await response.text()
    );

    const html = marked( `
# 90s Mixtape

- I wish (Skee-Lo)
- This Is How We Do It (Montell Jordan)
- Everlong (Foo Fighters)
- Ms. Jackson (Outkast)
- Interstate Love Song (Stone Temple Pilots)
- Killing Me Softly With His Song (Fugees, Ms. Lauryn Hill)
- Just a Friend (Biz Markie)
- The Man Who Sold The World (Nirvana)
- Semi-Charmed Life (Third Eye Blind)
- ...Baby One More Time (Britney Spears)
- Better Man (Pearl Jam)
- It's All Coming Back to Me Now (Céline Dion)
- This Kiss (Faith Hill)
- Fly Away (Lenny Kravits)
- Scar Tissue (Red Hot Chili Peppers)
- Santa Monica (Everclear)
- C'mon N' Ride it (Quad City DJ's)
    `.trim())

    return json({ok: true, uuid,html});
};
export default function Index() {
    const data = useLoaderData<typeof loader>()


    return (
        <div>
            <div>테스팅 사이트</div>

            <Link to={`/${data.uuid}`}>
                <button>이동</button>
            </Link>

            <div dangerouslySetInnerHTML={{__html : data.html}}></div>
        </div>
    );
}
