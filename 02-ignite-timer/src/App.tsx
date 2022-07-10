import { Button } from "./components/Button";

export function App() {
  return (
    <div>
      <Button/>
      <Button variant={"primary"}/>
      <Button variant={"secondary"}/>
      <Button variant={"success"}/>
      <Button variant={"danger"}/>
    </div>
  )
}