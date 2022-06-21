import React from "react";
import Card from "./Card";
import "./App.css";

export const AppleItems = () => {
  let data = {
    date: "17 Sep 2020",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAdVBMVEX///8AAAD4+Pjm5ubi4uLd3d0/Pz9CQkLv7++urq7X19eZmZn5+fmFhYXS0tLKyso4ODhJSUmPj4+8vLyhoaF8fHweHh7ExMSysrJjY2OWlpYyMjJXV1dPT0+np6fx8fEmJiYRERF1dXUVFRVpaWlWVlZoaGgY+IBTAAAEO0lEQVR4nO3da3eiMBAGYCLWCvUO1ktbe13//09cwa0iiUghs+Nr3+cz52xmFpI4uTQIiIiIiIiIiIiIiIiIiIiIiECFi01Huw3XpLNcmZ1Qux3XY7Q1e3faLbkW44kxzElRODVH/HYya1PEPnbXtfZOUmK023MFuqcZMVPtBum7K6XEzLRbpC4sp8SMtZukrWOlhN1Jz0rJh3aTtM3s1yTWbpMyq3815l67Tdqe7JyMtNukbGmn5Fm7Tdre7Zz0tdukLLFTstFuk7Z7fjll9gz2U7tJ6lJ2JpaXckq62i3SV04JS45W2YQVxyBYnGSkx4LjTlRMCetIuU3hJWHvunfIyf2vL6wd7L+d3vpXviOdMB7F9qjST5JxafjtLjbr4ewhGt9ynjrJ8LDA9zRPXiseHc1Ofv7snr7JkSgqLnjmJql7FpJ8WfP8nWn0nxssrT93hblLS1T+/x99uJ/MzG/oJ9DgTEZyq+T4YDyseDDPykAvCq+iC4Ga1TL7iMaXEpJbakfjQ8f6xev0WOupLIHaAbUX1421tkf0XsVRZW0P+0fz5nKAvy0pjiUbP3BncGOplJiJdmhN9cVSYkyqHVxDb3IpWWjH1lCtKVgjL6izWcfOCU9wS5OTy8E1gzu7F5msZZLL//a1ehdKCe5bIvaa4PYlzn1YPiDvqpYadHDn9GJzE+iNSzIpedQOqw3/haQc8DAcBA8yOdEOq5V6JdifQh6HpboT6K1L5U1HnmiH1YrMJBb72Iq9r9MH6MlJULUU2hz2Zp1nkZxgb0Oxj7D5ULVf5fp9iuREO6p2RFLCnDAntSDXTqRygrxwLpUT7KPGtfcc/QhwxT5wHe3zYagdVisrkZz0tMNqReb3jkFdOc8JlR6hy7FCi4DQ542FyvbQp2sd1914AT3yCOUEulwgMxgb86UdWAtCAw/0HTFyG2O1I2tuIJYT4A0oYhv8gFd5HLeK+QI7II/kcmLm2sE1JZgT2JNeFac/23vDnOQvLkfWBuZZY9mcmAlidVb048k8481pJUeePcD7Md+lcwJYdpPZmFOgHWADUoWlb5CTfOFeFnHgETz8lnnSDq8ZmZ3D/wD2sBnR4Vg7uKZk1o1zmJP7QG6dx+C+JlKbQg30vgv78mA/oA83CZ2Bw95SLZKSP9pRtSNSW8Issx0JLJOi3n1y4H/5C/aOnCPv66ToX07G89gDPDUp8LpQirq4U/LqMyfawfjisUvBPuxVtL4cbD230ZnseZqlwC6fO3k5Igg+p7d4uMDuBiZrpwatD7CAVqUrVU1TJtvhbDbcVt3CBLyTrcKZjnYbFQbYu82Zaj/kElcNjuXSlX2b5WDp6JBBly5qCE9fgrf0zGbxbuk30s1c4e4UH/7GwTStnJPG6++/m9BLsU/R1hEv001S686bcLQo/2ERIiIiIiIiIiIiIiIiIiIiIj1/AcReNPopFYb6AAAAAElFTkSuQmCC",
    heading: "Apple gift payment",
    subHeading: "MacOS - Mobile",
    arrow:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkx2bG5J8qGZD6kpB7_wv8-yvsUnFWaFBPg&usqp=CAU",
  };
  return (
    <>
      <div className="apple">
        <Card {...data} />
      </div>
    </>
  );
};
