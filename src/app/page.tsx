import { Avatar } from "@/components/avatar";
import { getUniqueRandomArray } from "@/lib/unique-ramdom-array";
import { cn } from "@/lib/utils";

const count = 8;
const imageIds = getUniqueRandomArray(count);

export default function Home() {

  return (
    <section className="grid h-full place-items-center">
      <ul className={cn(
        "grid transition-all duration-500 ease-in-out delay-300 hover:delay-0 mb-[20%]",
        `[--avatar-size:100px] [--col-size:calc(var(--avatar-size)/1.5)] [--count:${count}]`,
        "grid-cols-[repeat(8,var(--col-size))]",
        "hover:[--col-size:calc(var(--avatar-size)/1.4)]",
      )}>
        {imageIds.map((id) => (
          <Avatar key={id} id={id} />
        ))}
      </ul>
    </section>
  );
}
