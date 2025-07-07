"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MapPin, Quote } from "lucide-react";
import type { Client } from "../lib/client.interface";
import Image from "next/image";

interface ClientModalProps {
  client: Client | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ClientModal({ client, isOpen, onClose }: ClientModalProps) {
  // console.log("ClientModal", client, isOpen, onClose);
  if (!client) return null;
  const hasAddresses =
    Array.isArray(client.addresses) && client.addresses.length > 0;
  const hasDepartments =
    Array.isArray(client.departments) && client.departments.length > 0;
  const hasComment =
    typeof client.comment?.text === "string" &&
    client.comment.text.trim().length > 0;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-w-screen-md overflow-hidden rounded-lg border-0 bg-brand-softGreen">
          {/* Department tags at the very top of the modal */}
          {hasDepartments && (
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {client.departments.map((dept) => (
                <div
                  key={dept.id}
                  className="bg-brand-green text-white text-sm py-1 px-4 rounded-full "
                >
                  {dept.name}
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-row h-full gap-6">
            {/* Left side - Purple background with centered logo */}
            <div className="w-full md:w-2/5  hidden md:flex items-center justify-center p-8 relative rounded-xl">
              <div className="w-full h-full absolute rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                <Image
                  src={client.imagen_referencia || "/placeholder.svg"}
                  alt={client.nombre}
                  fill
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Right side - Client info with 3 sections */}
            <div className="w-full md:w-3/5 flex flex-col rounded-xl border-0">
              <div className="flex flex-col h-full">
                {hasComment ? (
                  <div className="relative">
                    <div className="absolute h-full bg-brand-green w-1/6 left-0 rounded-t-xl"></div>
                    <div className="absolute h-full bg-brand-green w-2/6 -bottom-5 left-0 rounded-t-xl"></div>
                    <div className="relative z-10 h-fit bg-brand-softGreen w-5/6 right-0 border-8 border-t-0 border-brand-softGreen rounded-tr-none md:rounded-lg ml-auto">
                      <div className="flex flex-col items-center justify-center h-fit gap-2 p-4">
                        <div className="h-40 relative w-full mb-2">
                          <Image
                            src={client.logo || "/placeholder.svg"}
                            alt={client.nombre}
                            width={150}
                            height={150}
                            className="object-contain mx-auto rounded-lg"
                            style={{ position: "relative" }}
                          />
                        </div>
                        <div>
                          <h2 className="text-lg md:text-xl text-center font-bold text-white uppercase">
                            {client.nombre}
                          </h2>
                          {hasComment && (
                            <p className="text-white text-center text-sm">
                              Experiencia
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full bg-brand-softGreen w-full right-0 border-8 border-t-0 border-brand-softGreen rounded-tr-none md:rounded-lg">
                    <div className="flex flex-col items-center justify-center h-full gap-2 p-4">
                      <div className="flex flex-col items-center justify-center h-fit gap-2 p-4">
                        <div className="h-40 relative w-full mb-2">
                          <Image
                            src={client.logo || "/placeholder.svg"}
                            alt={client.nombre}
                            width={150}
                            height={150}
                            className="object-contain mx-auto rounded-lg"
                            style={{ position: "relative" }}
                          />
                        </div>
                        <div>
                          <h2 className="text-lg md:text-xl text-center font-bold text-darkGreen uppercase mt-2">
                            {client.nombre}
                          </h2>
                        </div>
                      </div>
                      <div className="bg-brand-green p-2 rounded-xl w-full">
                        {hasDepartments && (
                          <div className="flex flex-col gap-2">
                            {client.departments.map((dept, deptIndex) => {
                              // Find addresses for this department
                              const deptAddresses = hasAddresses
                                ? client.addresses.filter(
                                    (addr) => addr.department?.id === dept.id
                                  )
                                : [];

                              return (
                                <div key={dept.id}>
                                  {/* Add separator except for the first department */}
                                  {deptIndex > 0 && (
                                    <div className="h-px bg-white/20 my-2"></div>
                                  )}

                                  <div className="flex flex-row text-white">
                                    {/* Department name on the left */}
                                    <div className="w-1/3 font-medium  text-[15px]">
                                      {dept.name}
                                    </div>

                                    {/* Addresses on the right */}
                                    <div className="w-2/3 flex flex-col gap-1 justify-center">
                                      {deptAddresses.length > 0 ? (
                                        deptAddresses.map((addr, idx) => (
                                          <div
                                            key={idx}
                                            className="flex items-start text-xs font-extralight"
                                          >
                                            <MapPin className="inline-block mr-1 w-3 h-3 flex-shrink-0 mt-0.5" />
                                            <span>
                                              {addr.address}
                                              {addr.reference &&
                                                ` (${addr.reference})`}
                                            </span>
                                          </div>
                                        ))
                                      ) : (
                                        <div className="flex items-start mb-1 text-xs">
                                          <MapPin className="inline-block mr-1 w-3 h-3 flex-shrink-0 mt-0.5" />
                                          <span>Dirección {dept.name}</span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {hasComment && (
                  <div className="h-fit rounded-xl bg-brand-green p-4 flex flex-col gap-4 pt-10">
                    <div className="bg-brand-green flex-grow relative">
                      {/* Quote mark */}
                      <div className="absolute top-0 right-0 text-3xl font-serif text-white/80">
                        <Quote className="w-8 h-8 md:w-10 md:h-10 rotate-180 fill-[#99413B] text-[#99413B]" />
                      </div>
                      <div className="max-h-[100px] overflow-y-auto pr-2 hiddenScroll">
                        <p className="text-white text-xs italic leading-relaxed pr-10">
                          {client.comment?.text}
                        </p>
                      </div>

                      {client.comment?.author && (
                        <div className="mt-3 text-white">
                          <p className="font-medium text-sm">
                            {client.comment.author}
                          </p>
                          {client.comment.position && (
                            <p className="text-xs">{client.comment.position}</p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom section - Dark red background with benefits */}
                    {hasDepartments && (
                      <div
                        className={`bg-[#99413B] p-3 px-4 rounded-xl ${
                          !hasComment ? "mt-2" : ""
                        }`}
                      >
                        <div className="flex flex-col gap-2">
                          {client.departments.map((dept, deptIndex) => {
                            // Find addresses for this department
                            const deptAddresses = hasAddresses
                              ? client.addresses.filter(
                                  (addr) => addr.department?.id === dept.id
                                )
                              : [];

                            return (
                              <div key={dept.id}>
                                {/* Add separator except for the first department */}
                                {deptIndex > 0 && (
                                  <div className="h-px bg-white/20 my-2"></div>
                                )}

                                <div className="flex flex-row text-white">
                                  {/* Department name on the left */}
                                  <div className="w-1/3 font-medium  text-[15px]">
                                    {dept.name}
                                  </div>

                                  {/* Addresses on the right */}
                                  <div className="w-2/3 flex flex-col gap-1 justify-center">
                                    {deptAddresses.length > 0 ? (
                                      deptAddresses.map((addr, idx) => (
                                        <div
                                          key={idx}
                                          className="flex items-start text-xs font-extralight"
                                        >
                                          <MapPin className="inline-block mr-1 w-3 h-3 flex-shrink-0 mt-0.5" />
                                          <span>
                                            {addr.address}
                                            {addr.reference &&
                                              ` (${addr.reference})`}
                                          </span>
                                        </div>
                                      ))
                                    ) : (
                                      <div className="flex items-start mb-1 text-xs">
                                        <MapPin className="inline-block mr-1 w-3 h-3 flex-shrink-0 mt-0.5" />
                                        <span>Dirección {dept.name}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
