import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "@/components/layout";
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/router";
import {
  ChatBubbleBottomCenterTextIcon,
  PaperClipIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const days = [
  { date: "2021-12-27" },
  { date: "2021-12-28" },
  { date: "2021-12-29" },
  { date: "2021-12-30" },
  { date: "2021-12-31" },
  { date: "2022-01-01", isCurrentMonth: true },
  { date: "2022-01-02", isCurrentMonth: true },
  { date: "2022-01-03", isCurrentMonth: true },
  { date: "2022-01-04", isCurrentMonth: true },
  { date: "2022-01-05", isCurrentMonth: true },
  { date: "2022-01-06", isCurrentMonth: true },
  { date: "2022-01-07", isCurrentMonth: true },
  { date: "2022-01-08", isCurrentMonth: true },
  { date: "2022-01-09", isCurrentMonth: true },
  { date: "2022-01-10", isCurrentMonth: true },
  { date: "2022-01-11", isCurrentMonth: true },
  { date: "2022-01-12", isCurrentMonth: true, isToday: true },
  { date: "2022-01-13", isCurrentMonth: true },
  { date: "2022-01-14", isCurrentMonth: true },
  { date: "2022-01-15", isCurrentMonth: true },
  { date: "2022-01-16", isCurrentMonth: true },
  { date: "2022-01-17", isCurrentMonth: true },
  { date: "2022-01-18", isCurrentMonth: true },
  { date: "2022-01-19", isCurrentMonth: true },
  { date: "2022-01-20", isCurrentMonth: true },
  { date: "2022-01-21", isCurrentMonth: true },
  { date: "2022-01-22", isCurrentMonth: true, isSelected: true },
  { date: "2022-01-23", isCurrentMonth: true },
  { date: "2022-01-24", isCurrentMonth: true },
  { date: "2022-01-25", isCurrentMonth: true },
  { date: "2022-01-26", isCurrentMonth: true },
  { date: "2022-01-27", isCurrentMonth: true },
  { date: "2022-01-28", isCurrentMonth: true },
  { date: "2022-01-29", isCurrentMonth: true },
  { date: "2022-01-30", isCurrentMonth: true },
  { date: "2022-01-31", isCurrentMonth: true },
  { date: "2022-02-01" },
  { date: "2022-02-02" },
  { date: "2022-02-03" },
  { date: "2022-02-04" },
  { date: "2022-02-05" },
  { date: "2022-02-06" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Diary() {
  const [open, setOpen] = useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();
  {
    if (status === "loading") {
      return <div>Loading...</div>;
    }

    if (session) {
      return (
        <>
          <Layout>
            <div className="lg:ml-64">
              <div className="bg-white">
                <section
                  aria-labelledby="features-heading"
                  className="relative"
                >
                  <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
                    <div className="">
                      <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9 ml-10   ">
                        <div className="flex items-center">
                          <button
                            type="button"
                            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Previous month</span>
                            <ChevronLeftIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </button>
                          <div className="flex-auto font-semibold">January</div>
                          <button
                            type="button"
                            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Next month</span>
                            <ChevronRightIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                        <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                          <div>M</div>
                          <div>T</div>
                          <div>W</div>
                          <div>T</div>
                          <div>F</div>
                          <div>S</div>
                          <div>S</div>
                        </div>
                        <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                          {days.map((day, dayIdx) => (
                            <button
                              key={day.date}
                              type="button"
                              className={classNames(
                                "py-1.5 hover:bg-gray-100 focus:z-10",
                                day.isCurrentMonth ? "bg-white" : "bg-gray-50",
                                (day.isSelected || day.isToday) &&
                                  "font-semibold",
                                day.isSelected && "text-white",
                                !day.isSelected &&
                                  day.isCurrentMonth &&
                                  !day.isToday &&
                                  "text-gray-900",
                                !day.isSelected &&
                                  !day.isCurrentMonth &&
                                  !day.isToday &&
                                  "text-gray-400",
                                day.isToday &&
                                  !day.isSelected &&
                                  "text-indigo-600",
                                dayIdx === 0 && "rounded-tl-lg",
                                dayIdx === 6 && "rounded-tr-lg",
                                dayIdx === days.length - 7 && "rounded-bl-lg",
                                dayIdx === days.length - 1 && "rounded-br-lg"
                              )}
                            >
                              <time
                                dateTime={day.date}
                                className={classNames(
                                  "mx-auto flex h-7 w-7 items-center justify-center rounded-full",
                                  day.isSelected &&
                                    day.isToday &&
                                    "bg-indigo-600",
                                  day.isSelected &&
                                    !day.isToday &&
                                    "bg-transparent"
                                )}
                              ></time>
                            </button>
                          ))}
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 sm:pb-32 lg:grid h-screen lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-4">
                    <div className="lg:col-start-2">
                      <div className="relative">
                        <div
                          className="absolute inset-0 flex items-center"
                          aria-hidden="true"
                        >
                          <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center">
                          <span className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                            <button
                              type="button"
                              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >
                              <span className="sr-only">Edit</span>
                              <PencilIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </button>
                            <button
                              type="button"
                              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >
                              <span className="sr-only">Attachment</span>
                              <PaperClipIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </button>
                            <button
                              type="button"
                              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >
                              <span className="sr-only">Annotate</span>
                              <ChatBubbleBottomCenterTextIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </button>
                            <button
                              type="button"
                              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >
                              <span className="sr-only">Delete</span>
                              <TrashIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </button>
                          </span>
                        </div>
                      </div>
                      <p className="mt-4 text-xl mb-4  tracking-tight text-gray-700">
                        Write about your day here
                      </p>
                      <div className="rounded-md border h-64 border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                        
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                          placeholder="Dear diary,"
                        />
                      </div>

                      
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Layout>
        </>
      );
    }
    router.push("/login");
    return null;
  }
}
