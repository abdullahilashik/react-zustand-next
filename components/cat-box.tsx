import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Plus } from "lucide-react";
import { useCatStore, useCatStoreImmer } from "@/stores/use-cat-store";

const CatBox = () => {
  const bigCats = useCatStoreImmer((state) => state.cats.bigCats);
  const smallCats = useCatStoreImmer((state) => state.cats.smallCats);

  // const increaseBigCats = useCatStoreImmer(state => state.increaseBigCats);
  // const increaseSmallCats = useCatStoreImmer(state => state.increaseSmallCats);

  const increaseBigCats = useCatStoreImmer.use.increaseBigCats;
  const increaseSmallCats = useCatStoreImmer.use.increaseSmallCats;

  const summary = useCatStoreImmer((state) => state.summary);

  return (
    <>
      <section className="py-4">
        <div className="container mx-auto">
          <Card>
            <CardHeader>
              <h1 className="text-lg font-bold">Cat Box</h1>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <tbody>
                  <tr className="border p-4">
                    <th className="p-4 border">Big Cats</th>
                    <td className="p-4 border">{bigCats}</td>
                    <td className="p-4 border">
                      <button
                        onClick={increaseBigCats}
                        className="p-2 text-center shadow cursor-pointer bg-green-600 text-white"
                      >
                        <Plus />
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <th className="p-4 border">Small Cats</th>
                    <td className="p-4 border">{smallCats}</td>
                    <td className="p-4 border">
                      <button
                        onClick={increaseSmallCats}
                        className="p-2 text-center shadow cursor-pointer bg-green-600 text-white"
                      >
                        <Plus />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
            <CardFooter>
              <p>{summary()}</p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};

export default CatBox;
