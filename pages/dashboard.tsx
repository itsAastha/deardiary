import { useSession } from "next-auth/react";
import Layout from "@/components/layout";
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/router";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

export default function Dashboard() {
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
              <div className="mx-10">
                <div className="">
                  <div className="mx-10">
                    <div className="bg-white">
                      <div className="mx-auto grid  grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-10  lg:grid-cols-2 lg:px-4">
                        <div>
                          <h2 className="text-2xl font-bold tracking-tight text-lime-500 ">
                            These are the most common emotions you've experienced lately.
                          </h2>
                          <p className="mt-4 text-gray-500">
                           From the diary entries you've made in the past few days' we've compiled the emotions that you've experienced and have prepared and analysis for you.
                          </p>

                          <dl className="mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            {features.map((feature) => (
                              <div
                                key={feature.name}
                                className="border-t border-gray-200 pt-4"
                              >
                                <dt className="font-medium text-gray-900">
                                  {feature.name}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500">
                                  {feature.description}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                        <div className="grid grid-cols-2  grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                          <div className="w-64 h-64 items-center flex justify-center   bg-pink-100">
                            g1
                          </div>
                          <div className="w-64 h-64 items-center flex justify-center bg-pink-100">
                            g1
                          </div>
                          <div className="w-64 h-64 items-center flex justify-center bg-pink-100">
                            g1
                          </div>
                          <div className="w-64 h-64 items-center flex justify-center bg-pink-100">
                            g1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </>
      );
    }
    router.push("/");
    return null;
  }
}
