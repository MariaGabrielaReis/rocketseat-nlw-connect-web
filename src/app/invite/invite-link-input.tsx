"use client";

import { Copy, Link } from "lucide-react";

import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";

type InviteLinkInputProps = { inviteLink: string };

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink);
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField defaultValue={inviteLink} readOnly />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
