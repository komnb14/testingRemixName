import React from 'react';
import {json, LoaderArgs} from "@remix-run/cloudflare";
import {useLoaderData} from "@remix-run/react";

export const loader = ({params}:LoaderArgs) => {
    const uuid = params.uuid;
    return json({uuid});
}

const Uuid = () => {
    const {uuid} = useLoaderData<typeof loader>();
    return (
        <div>
            {uuid}
        </div>
    );
};

export default Uuid;
