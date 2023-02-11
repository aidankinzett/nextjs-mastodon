export default async function Local({
  params: { server },
}: {
  params: { server: string };
}) {
  const res = await fetch(`https://${server}/api/v1/timelines/public`, {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <main className="">
      <div className="flex flex-col  items-center gap-6">
        <div className="text-xl">Posts</div>
        {data.map((toot: any) => (
          <div className="border-2 rounded border-slate-400 p-4">
            <h1 className="text-xl">{toot.account.display_name}</h1>
            <div className="prose">
              <div
                dangerouslySetInnerHTML={{ __html: toot.content as string }}
              />
            </div>

            {/* display attached images */}
            {toot.media_attachments.map((attachment: any) => (
              <div className="flex justify-center">
                <img
                  className="max-w-screen-sm"
                  src={attachment.url}
                  alt={attachment.description}
                />
              </div>
            ))}

            <div className="text-sm text-gray-500">
              {new Date(toot.created_at).toLocaleString()}

              <div className="flex gap-2">
                <div className="flex gap-1">
                  <div className="text-gray-500">👍</div>
                  <div>{toot.favourites_count}</div>

                  <div className="text-gray-500">🗨️</div>
                  <div>{toot.replies_count}</div>

                  <div className="text-gray-500">🔁</div>
                  <div>{toot.reblogs_count}</div>

                  <div className="text-gray-500">📌</div>
                  <div>{toot.favourites_count}</div>

                  <div className="text-gray-500">
                    <a href={toot.uri}>🔗</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
