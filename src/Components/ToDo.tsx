import React, { useState, useEffect } from "react";
import { Card, Button, CardTitle, CardText, CardBody } from "reactstrap";

import { useAppDispatch, useAppSelector } from "../hooks/index";
import { updateCard } from "../redux/slices/cardSlice/card.action";

interface Props {
  cardTitle: String;
}

export const ToDo: React.FC<Props> = ({ cardTitle }) => {
  const dispatch = useAppDispatch();
  const cardObject = useAppSelector((state) => state.card.cardObject);

  // const [cardObject, setCardObject] = useState<any>([
  //   { 1: "1", 2: "two" },
  // ]);

  useEffect(() => {
    console.log("Mavia", cardObject);
  }, [cardObject]);

  return (
    <div className="p-3 text-center w-75 mx-auto">
      {cardObject.map((val, index: number) => {
        console.log("aaaaaaaaaaaaaa", val.wah);
        return (
          <>
            <Card
              inverse
              color="success"
              className="m-3 text-center w-75 mx-auto"
            >
              <CardBody>
                <CardTitle tag="h6">{cardTitle}</CardTitle>

                <CardText>Price : ${(val.wah * (index+1)).toFixed(3)}</CardText>
              </CardBody>
            </Card>
          </>
        );
      })}

      <Button
        className="w-25 mx-2 "
        onClick={() => {
          dispatch(updateCard("add"));
        }}
        color="info"
      >
        Add Card
      </Button>
      <Button
        className="w-25 mx-2"
        onClick={() => {
          dispatch(updateCard("delete"));
        }}
        color="danger"
      >
        Delete Card
      </Button>
    </div>
  );
};
export default ToDo;
