import { useState } from "react";
import { Switch } from "@headlessui/react";
import { BeakerIcon } from "@heroicons/react/solid";

export default function Index() {
  const [enabled, setEnabled] = useState(false);

  return (
    <main>
      <h1>Testing @headlessui/react with Remix v1.3.5</h1>

      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white`}
        />
      </Switch>
      <BeakerIcon className="h-5 w-5 text-blue-500" />
    </main>
  );
}
