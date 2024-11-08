"use client";
import * as React from "react";
import {
  ArrowUpRight,
  Bell,
  Home,
  Languages,
  Layout,
  Link2,
  Lock,
  MessageSquare,
  Navigation,
  Settings,
  Shield,
  Smartphone,
  Video,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

function NotificationSettings() {
  return (
    <Card className="w-full max-w-3xl border-0 shadow-none">
      <CardHeader className="pt-0">
        <CardTitle className="text-lg font-medium mb-2">
          My notifications
        </CardTitle>
        <hr />
      </CardHeader>
      {/* <div className="w-full border"></div> */}
      <CardContent className="space-y-8">
        {/* Mobile Push Notifications */}
        <div className="space-y-1">
          <h2 className="text-sm font-medium">Mobile push notifications</h2>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-xs text-muted-foreground opacity-75">
                Receive push notifications on mentions and comments via your
                mobile app
              </p>
            </div>
            <Switch className={"data-[state=checked]:bg-red-500"} />
          </div>
        </div>

        {/* Slack Notifications */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium mb-2">Slack notifications</h2>
          <hr />
          <div className="space-y-1">
            <h2 className="text-sm font-medium">Slack notifications</h2>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-xs text-muted-foreground opacity-75">
                  Receive notifications in your Slack workspace when you're
                  mentioned in a page, database property
                </p>
              </div>
              <Select defaultValue="off">
                <SelectTrigger className="w-[80px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="off">Off</SelectItem>
                  <SelectItem value="on">On</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Email Notifications */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium mb-2">Email notifications</h2>
          <hr />
          <div className="space-y-1">
            <h2 className="text-sm font-medium">Activity in your workspace</h2>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-xs text-muted-foreground opacity-75">
                  Receive emails when you get comments, mentions, page invites,
                  reminders, access requests, and property changes
                </p>
              </div>
              <Switch />
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="text-sm font-medium">
              Always send email notifications
            </h2>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-xs text-muted-foreground opacity-75">
                  Receive emails about activity in your workspace, even when
                  you're active on the app
                </p>
              </div>
              <Switch />
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="text-sm font-medium">Page updates</h2>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-xs text-muted-foreground opacity-75">
                  Receive email digests every 8 hours for changes to pages
                  you're subscribed to
                </p>
              </div>
              <Switch />
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="text-sm font-medium">Workspace digest</h2>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-xs text-muted-foreground opacity-75">
                  Receive email digests of what's happening in your workspace
                </p>
              </div>
              <Switch />
            </div>
          </div>
          <div className="flex justify-between space-y-1">
            <div>
              <h2 className="text-sm font-medium">
                Announcements and update emails
              </h2>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="text-xs text-muted-foreground opacity-75">
                    Receive occasional emails about product launches and new
                    features from Notion
                  </p>
                </div>
              </div>
            </div>
            {/* Manage Settings Button */}
            <div className="">
              <Button variant="outline" className="w-full sm:w-auto">
                Manage settings
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const sections = [
  {
    id: "notifications",
    label: "Notifications",
    icon: <Bell className="h-4 w-4" />,
    content: <NotificationSettings />,
  },
  {
    id: "navigation",
    label: "Navigation",
    icon: <Navigation className="h-4 w-4" />,
    content: null,
  },
  {
    id: "home",
    label: "Home",
    icon: <Home className="h-4 w-4" />,
    content: null,
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: <Layout className="h-4 w-4" />,
    content: null,
  },
  {
    id: "messages",
    label: "Messages & media",
    icon: <MessageSquare className="h-4 w-4" />,
    content: null,
  },
  {
    id: "language",
    label: "Language & region",
    icon: <Languages className="h-4 w-4" />,
    content: null,
  },
  {
    id: "accessibility",
    label: "Accessibility",
    icon: <Smartphone className="h-4 w-4" />,
    content: null,
  },
  {
    id: "mark-as-read",
    label: "Mark as read",
    icon: <Shield className="h-4 w-4" />,
    content: null,
  },
  {
    id: "audio-video",
    label: "Audio & video",
    icon: <Video className="h-4 w-4" />,
    content: null,
  },
  {
    id: "salesforce",
    label: "Salesforce",
    icon: <Link2 className="h-4 w-4" />,
    content: null,
  },
  {
    id: "connected-accounts",
    label: "Connected accounts",
    icon: <Link2 className="h-4 w-4" />,
    content: null,
  },
  {
    id: "privacy",
    label: "Privacy & visibility",
    icon: <Lock className="h-4 w-4" />,
    content: null,
  },
  {
    id: "advanced",
    label: "Advanced",
    icon: <Settings className="h-4 w-4" />,
    content: null,
  },
];

export function Preferences() {
  const [selectedSection, setSelectedSection] = React.useState("notifications");
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Open preferences</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-6xl gap-0 p-0">
        <DialogHeader className="px-4 py-2 border-b">
          <div className="flex items-center justify-between h-8 w-8">
            <DialogTitle>Settings</DialogTitle>
            {/* <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button> */}
          </div>
        </DialogHeader>
        <div className="w-full flex">
          {/* left */}
          <div className="border-r w-60">
            <ScrollArea className="h-[81vh]">
              <div className="flex flex-col gap-1 p-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setSelectedSection(section.id)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
                      "hover:bg-accent hover:text-accent-foreground",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      selectedSection === section.id &&
                        "bg-accent text-accent-foreground"
                    )}
                  >
                    {section.icon}
                    {section.label}
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>
          {/* right */}
          <div className="flex-1">
            <ScrollArea className="h-[calc(90vh-4rem)]">
              <div className="flex-1 p-4">
                {sections.find((section) => section.id === selectedSection)
                  ?.content || (
                  <div className="flex h-[50vh] items-center justify-center text-muted-foreground">
                    This section is not implemented yet
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
