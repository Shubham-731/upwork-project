import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

const Center = () => {
  return (
    <div className="w-[84%] relative bg-slate-100 p-5">
      <div className="grid grid-cols-4 gap-4 grid-rows-4">
        <div className="bg-white p-3 space-y-2 rounded-lg">
          <div className="">
            <img
              src="/assets/images/insta.png"
              alt="Instagram"
              className="w-10 h-10 rounded-full inline-block mr-3 shadow-lg shadow-slate-300"
            />
            <span className="inline-block font-semibold text-slate-600">
              Instagram
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex item-center justify-between">
              <p className="font-bold text-[#040f45] text-lg">9,89670</p>
              <img src="/assets/images/stat.png" alt="graph" />
            </div>
            <p className="text-slate-500">Influencers since last month</p>
          </div>
        </div>

        <div className="bg-white p-3 space-y-2 rounded-lg">
          <div>
            <img
              src="/assets/images/youtube.svg"
              alt="Youtube"
              className="w-10 h-10 rounded-full inline-block mr-3 shadow-lg shadow-red-300"
            />
            <span className="inline-block font-semibold text-slate-600">
              Youtube
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex item-center justify-between">
              <p className="font-bold text-[#040f45] text-lg">9,89670</p>
              <img src="/assets/images/stat.png" alt="graph" />
            </div>
            <p className="text-slate-500">Influencers since last month</p>
          </div>
        </div>

        <div className="bg-white p-3 space-y-2 rounded-lg">
          <div className="">
            <img
              src="/assets/images/tiktok.png"
              alt="Tiktok"
              className="w-10 h-10 rounded-full inline-block mr-3 shadow-lg shadow-slate-300"
            />
            <span className="inline-block font-semibold text-slate-600">
              Tiktok
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex item-center justify-between">
              <p className="font-bold text-[#040f45] text-lg">9,89670</p>
              <img src="/assets/images/stat.png" alt="graph" />
            </div>
            <p className="text-slate-500">Influencers since last month</p>
          </div>
        </div>

        <div className="bg-white row-span-4 w-full">
          <Calendar className="shadow-lg shadow-slate-200" />

          <div className="mt-2 p-2">
            <p className="text-[#14084d] font-semibold mb-3">Notifications</p>

            <div className="space-y-2">
              <div className="p-1 rounded border border-slate-100">
                <div className="space-x-2 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <p className="font-semibold text-sm">
                    A connect with Minhas Asif
                  </p>
                </div>
                <p className="text-slate-400 text-sm ml-5">
                  Oct 26, 2022 | 4:00 PM
                </p>
              </div>
              <div className="p-1 rounded border border-slate-100">
                <div className="space-x-2 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                  <p className="font-semibold text-sm">
                    A connect with Minhas Asif
                  </p>
                </div>
                <p className="text-slate-400 text-sm ml-5">
                  Oct 26, 2022 | 4:00 PM
                </p>
              </div>
              <div className="p-1 rounded border border-slate-100">
                <div className="space-x-2 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                  <p className="font-semibold text-sm">
                    A connect with Minhas Asif
                  </p>
                </div>
                <p className="text-slate-400 text-sm ml-5">
                  Oct 26, 2022 | 4:00 PM
                </p>
              </div>
              <div className="p-1 rounded border border-slate-100">
                <div className="space-x-2 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                  <p className="font-semibold text-sm">
                    A connect with Minhas Asif
                  </p>
                </div>
                <p className="text-slate-400 text-sm ml-5">
                  Oct 26, 2022 | 4:00 PM
                </p>
              </div>
              <div className="p-1 rounded border border-slate-100">
                <div className="space-x-2 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                  <p className="font-semibold text-sm">
                    A connect with Minhas Asif
                  </p>
                </div>
                <p className="text-slate-400 text-sm ml-5">
                  Oct 26, 2022 | 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white col-span-3 row-span-3 p-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-lg font-semibold">All Influencers</p>
              <p className="text-slate-500 text-sm">
                More than 290+ Influencers
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="py-2 px-3 space-x-2 outline-none border rounded-lg border-slate-100 flex items-center text-sm">
                <img src="/assets/images/SlidersHorizontal.png" alt="" />
                <span>Filters</span>
              </button>
              <button className="py-2 px-3 space-x-2 outline-none rounded-lg bg-slate-300 flex items-center text-sm">
                Export Reports
              </button>
              <button className="py-2 px-3 space-x-2 outline-none rounded-lg bg-[#101b52] flex items-center text-sm text-white">
                Add new Influencers
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3 justify-between">
            <div className="p-3 border border-slate-100 rounded-lg space-y-2">
              <p className="mb-1 text-sm">
                <span className="font-semibold text-slate-600">
                  Identified:
                </span>{" "}
                <span className="text-slate-500">89670</span>
              </p>

              <div className="space-y-1">
                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>
              </div>

              <ul className="flex items-center justify-end space-x-3">
                <li className="border border-slate-100 rounded-lg p-1">
                  <FaAngleLeft className="cursor-pointer" />
                </li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>...</li>
                <li>32</li>
                <li className="border bg-slate-200 rounded-lg p-1 ">
                  <FaAngleRight className="cursor-pointer" />
                </li>
              </ul>
            </div>
            <div className="p-3 border border-slate-100 rounded-lg space-y-2">
              <p className="mb-1 text-sm">
                <span className="font-semibold text-slate-600">Contacted:</span>{" "}
                <span className="text-slate-500">96707</span>
              </p>

              <div className="space-y-1">
                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>
              </div>

              <ul className="flex items-center justify-end space-x-3">
                <li className="border border-slate-100 rounded-lg p-1">
                  <FaAngleLeft className="cursor-pointer" />
                </li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>...</li>
                <li>32</li>
                <li className="border bg-slate-200 rounded-lg p-1 ">
                  <FaAngleRight className="cursor-pointer" />
                </li>
              </ul>
            </div>
            <div className="p-3 border border-slate-100 rounded-lg space-y-2">
              <p className="mb-1 text-sm">
                <span className="font-semibold text-slate-600">
                  Registered:
                </span>{" "}
                <span className="text-slate-500">67034</span>
              </p>

              <div className="space-y-1">
                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-60 border border-slate-100 rounded p-1">
                  <div className="flex space-x-1 items-center">
                    <img
                      src="/assets/images/random-user.png"
                      alt="user"
                      className="w-8 h-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">Username</p>
                      <p className="flex items-center space-x-1 text-sm">
                        <img
                          src="/assets/images/InstagramLogo.png"
                          alt="insta"
                        />
                        <span>1.5k</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#101b52] font-semibold">
                      Heart Disease
                    </p>
                    <p className="flex items-center space-x-1 text-sm">
                      <img src="/assets/images/MapPin.png" alt="map pin" />
                      <span>Switzerland</span>
                    </p>
                  </div>
                </div>
              </div>

              <ul className="flex items-center justify-end space-x-3">
                <li className="border border-slate-100 rounded-lg p-1">
                  <FaAngleLeft className="cursor-pointer" />
                </li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>...</li>
                <li>32</li>
                <li className="border bg-slate-200 rounded-lg p-1 ">
                  <FaAngleRight className="cursor-pointer" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
