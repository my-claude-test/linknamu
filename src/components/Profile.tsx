import type { ProfileData } from "@/lib/data";

export default function Profile({ profile }: { profile: ProfileData }) {
  return (
    <section className="flex flex-col items-center text-center">
      {/* 흰 테두리 + 부드러운 그림자로 살짝 떠 있는 듯한 입체감 */}
      <div className="rounded-full bg-white/70 p-1.5 shadow-[0_14px_34px_-10px_rgba(150,95,45,0.4)] ring-1 ring-white/60 backdrop-blur-sm dark:bg-white/10 dark:ring-white/10">
        <div className="h-28 w-28 overflow-hidden rounded-full ring-1 ring-black/5 dark:ring-white/5">
          {profile.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profile.avatarUrl}
              alt={`${profile.name} 프로필 사진`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-300 to-orange-500 text-3xl font-bold text-white">
              {profile.name.slice(0, 1)}
            </div>
          )}
        </div>
      </div>

      <h1 className="mt-5 text-xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-2 max-w-[20rem] text-sm leading-relaxed text-neutral-600 dark:text-neutral-300/80">
        {profile.bio}
      </p>
    </section>
  );
}
