import type { ProfileData } from "@/lib/data";

export default function Profile({ profile }: { profile: ProfileData }) {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="h-24 w-24 overflow-hidden rounded-full ring-2 ring-neutral-200 dark:ring-neutral-700">
        {profile.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.avatarUrl}
            alt={`${profile.name} 프로필 사진`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-400 to-teal-600 text-3xl font-bold text-white">
            {profile.name.slice(0, 1)}
          </div>
        )}
      </div>

      <h1 className="mt-4 text-xl font-bold">{profile.name}</h1>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
        {profile.bio}
      </p>
    </section>
  );
}
