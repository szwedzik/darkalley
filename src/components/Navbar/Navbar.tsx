"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Links from "@/utils/Links/Links";

const navigation = [
  { name: "Regulamin", href: Links.rules },
  { name: "Lore", href: Links.lore },
  { name: "FAQ", href: Links.faq },
  { name: "Wsparcie", href: Links.donate },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-zinc-950">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="https://cdn.discordapp.com/attachments/1247795330712600576/1257297316394696785/DA.png?ex=6683e4df&is=6682935f&hm=2675f9e659b35facce7bbf1c7a14cb9f83834e3fbcf93d36747550f10c938f77&"
                      alt="DarkAlley"
                    />
                  </a>
                  <a href="/">
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://cdn.discordapp.com/attachments/1247795330712600576/1257297316394696785/DA.png?ex=6683e4df&is=6682935f&hm=2675f9e659b35facce7bbf1c7a14cb9f83834e3fbcf93d36747550f10c938f77&"
                      alt="DarkAlley"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          "text-gray-300 hover:text-white",
                          "px-3 py-2 text-sm font-medium",
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/*<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">*/}
              {/*  <div className="flex space-x-4">*/}
              {/*    <a*/}
              {/*      href="#"*/}
              {/*      className="text-gray-300 hover:text-grey-700 rounded-md px-3 py-2 text-sm font-medium"*/}
              {/*    >*/}
              {/*      Panel użytkownika*/}
              {/*    </a>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
