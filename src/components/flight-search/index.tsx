/** @format */
import { useState } from "react";

import {
  StyledFlightSearchCard,
  StyledFlightSearchContainer,
  StyledSmallBox,
  StyledThinLine,
} from "../Styled-component";
import { flightSearchText } from "../constants";
import { FaAngleRight, FaPlus, FaMinus } from "react-icons/fa";
import { VscListUnordered } from "react-icons/vsc";
import { FaCalendarDays } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";

const FlightSearch = () => {
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [trip, setTrip] = useState(true);
  return (
    <StyledFlightSearchContainer>
      <StyledFlightSearchCard>
        <div>
          <button>{flightSearchText.flight}</button>
          <button>{flightSearchText.holidays}</button>
          <button>{flightSearchText.car}</button>
        </div>
        <div>
          <StyledSmallBox>
            <GiCheckMark
              color={trip ? "#ff6600" : "#cccccc"}
              onClick={() => setTrip(!trip)}
            />
          </StyledSmallBox>
          {!trip ? flightSearchText.oneWay : flightSearchText.roundTrip}
        </div>
        <div>
          <section>
            {flightSearchText.from}
          </section>
          <StyledThinLine></StyledThinLine>
          <section>
            {flightSearchText.to}
          </section>
        </div>
        <div>
          <VscListUnordered />
        </div>
        <div>
          <VscListUnordered />
        </div>
        <div>
          <section>
            <FaCalendarDays size={30} color='#ff6600' />
            {flightSearchText.depart}
          </section>
          <StyledThinLine></StyledThinLine>
          <section>
            <FaCalendarDays size={30} color='#ff6600' />
            {flightSearchText.returns}
          </section>
        </div>
        <div>
          <main>
            <section>{flightSearchText.adult}</section>
            <section>
              <FaMinus
                color={adult > 0 ? "#ff6600" : "#cccccc"}
                onClick={() => setAdult((prev) => prev - 1)}
              />
              {adult}
              <FaPlus
                color='#ff6600'
                onClick={() => setAdult((prev) => prev + 1)}
              />
            </section>
          </main>
          <main>
            <section>{flightSearchText.children}</section>
            <section>
              <FaMinus
                color={children > 0 ? "#ff6600" : "#cccccc"}
                onClick={() => setChildren((prev) => prev - 1)}
              />
              {children}
              <FaPlus
                color={adult > 0 ? "#ff6600" : "#cccccc"}
                onClick={() => setChildren((prev) => prev + 1)}
              />
            </section>
          </main>
          <main>
            <section>{flightSearchText.infants}</section>
            <section>
              <FaMinus
                color={infants > 0 ? "#ff6600" : "#cccccc"}
                onClick={() => setInfants((prev) => prev - 1)}
              />
              {infants}
              <FaPlus
                color={adult > 0 ? "#ff6600" : "#cccccc"}
                onClick={() => setInfants((prev) => prev + 1)}
              />
            </section>
          </main>
        </div>
        <div>
          <button>
            Show flights <FaAngleRight />
          </button>
        </div>
        <div>
          {flightSearchText.abtSpecAss}
          <FaAngleRight />
        </div>
        <div>
          {flightSearchText.tacCarbonEm}
          <FaAngleRight />
        </div>
      </StyledFlightSearchCard>
    </StyledFlightSearchContainer>
  );
};

export default FlightSearch;
