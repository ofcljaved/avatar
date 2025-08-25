import { Avatar } from "@/components/avatar";
import { getUniqueRandomArray } from "@/lib/unique-ramdom-array";
import { cn } from "@/lib/utils";

const count = 8;
const imageIds = getUniqueRandomArray(count);

export default function Home() {
  return (
    <main className="grid h-full place-items-center">
      <section className="text-center">
        <h1 className="sr-only">Avatar Challenge</h1>
        <p className="sr-only">Interactive Design Challenge from PEERLIST. Here is a list of avatars with their names and roles.</p>
        
        <ul 
          className={cn(
            "grid transition-all duration-500 ease-in-out delay-300 hover:delay-0 mb-[20%]",
            `[--avatar-size:100px] [--col-size:calc(var(--avatar-size)/1.5)] [--count:${count}]`,
            "grid-cols-[repeat(8,var(--col-size))]",
            "hover:[--col-size:calc(var(--avatar-size)/1.4)]",
          )}
          role="list"
          aria-label={`Grid of ${count} interactive avatars`}
        >
          {imageIds.map((id) => (
            <Avatar key={id} id={id} />
          ))}
        </ul>
      </section>
    </main>
  );
}
