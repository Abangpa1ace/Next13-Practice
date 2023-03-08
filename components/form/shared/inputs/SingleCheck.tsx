import { useState } from "react";
import { InputKeys } from "../../../../constants/form";
import { handleError } from "../../../../utils/error";
import Checkbox from "../../../common/Checkbox";
import FormerItem from "../FormerItem";

interface SingleCheckProps extends FormerInputProps {
  label?: string;
  defaultChecked?: boolean;
}

const SingleCheck = ({
  id,
  title,
  label,
  defaultChecked,
}: SingleCheckProps) => {
  return (
    <FormerItem id={id} title={title || ''} errorData={null}>
      <Checkbox id={id} label={label} defaultChecked={defaultChecked} />
    </FormerItem>
  )
}

export default SingleCheck;