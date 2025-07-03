import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <div className="mt-5 space-y-2"></div>
        </div>
        <SignIn />
      </div>
    </main>
  );
}
