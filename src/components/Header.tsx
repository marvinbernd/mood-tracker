import { Settings } from "lucide-preact";

const Header = ({ title }: { title: string }) => {
  return (
    <>
      <div class="flex justify-between items-center px-4 py-6">
        <div></div>
        <div>
          <span class="font-bold">{title}</span>
        </div>
        <div>
          <Settings
            class="h-4 w-4 cursor-pointer"
            onClick={() => alert("Settings clicked!")}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
