import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, Calendar, Users } from "lucide-react";

export function Timetable() {
  const schedule = [
    {
      day: "Monday",
      sessions: [
        { time: "9:00 - 10:30", subject: "Mathematics", level: "Primary", type: "Group" },
        { time: "11:00 - 12:30", subject: "English", level: "Secondary", type: "Group" },
        { time: "2:00 - 3:30", subject: "Science", level: "IGCSE", type: "Small Group" },
        { time: "4:00 - 5:00", subject: "Homeschool Support", level: "Various", type: "Individual" }
      ]
    },
    {
      day: "Tuesday",
      sessions: [
        { time: "9:00 - 10:30", subject: "Physics", level: "A-Level", type: "Group" },
        { time: "11:00 - 12:30", subject: "Mathematics", level: "Secondary", type: "Group" },
        { time: "2:00 - 3:30", subject: "Chemistry", level: "IGCSE", type: "Small Group" },
        { time: "4:00 - 5:30", subject: "Online Classes", level: "Various", type: "Virtual" }
      ]
    },
    {
      day: "Wednesday",
      sessions: [
        { time: "9:00 - 10:30", subject: "English Literature", level: "A-Level", type: "Group" },
        { time: "11:00 - 12:30", subject: "Biology", level: "Secondary", type: "Group" },
        { time: "2:00 - 3:30", subject: "Mathematics", level: "Primary", type: "Small Group" },
        { time: "4:00 - 5:00", subject: "Art & Design", level: "Various", type: "Workshop" }
      ]
    },
    {
      day: "Thursday",
      sessions: [
        { time: "9:00 - 10:30", subject: "Economics", level: "A-Level", type: "Group" },
        { time: "11:00 - 12:30", subject: "Geography", level: "IGCSE", type: "Group" },
        { time: "2:00 - 3:30", subject: "English", level: "Primary", type: "Small Group" },
        { time: "4:00 - 5:30", subject: "Exam Preparation", level: "Various", type: "Intensive" }
      ]
    },
    {
      day: "Friday",
      sessions: [
        { time: "9:00 - 10:30", subject: "Mathematics", level: "A-Level", type: "Group" },
        { time: "11:00 - 12:30", subject: "History", level: "Secondary", type: "Group" },
        { time: "2:00 - 3:30", subject: "Science", level: "Primary", type: "Small Group" },
        { time: "4:00 - 5:00", subject: "Study Skills", level: "Various", type: "Workshop" }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Group": return "bg-blue-100 text-blue-800";
      case "Small Group": return "bg-green-100 text-green-800";
      case "Individual": return "bg-purple-100 text-purple-800";
      case "Virtual": return "bg-orange-100 text-orange-800";
      case "Workshop": return "bg-pink-100 text-pink-800";
      case "Intensive": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Primary": return "bg-yellow-100 text-yellow-800";
      case "Secondary": return "bg-indigo-100 text-indigo-800";
      case "IGCSE": return "bg-teal-100 text-teal-800";
      case "A-Level": return "bg-rose-100 text-rose-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="timetable" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Weekly Timetable
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our structured weekly schedule offers a variety of subjects and learning formats to accommodate different learning preferences and academic levels.
          </p>
        </div>

        {/* Legend */}
        <div className="mb-8 p-6 bg-gray-50 rounded-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Class Types
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-100 text-blue-800">Group (8-12 students)</Badge>
                <Badge className="bg-green-100 text-green-800">Small Group (3-6 students)</Badge>
                <Badge className="bg-purple-100 text-purple-800">Individual (1-on-1)</Badge>
                <Badge className="bg-orange-100 text-orange-800">Virtual (Online)</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Academic Levels
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-yellow-100 text-yellow-800">Primary (Ages 6-11)</Badge>
                <Badge className="bg-indigo-100 text-indigo-800">Secondary (Ages 12-16)</Badge>
                <Badge className="bg-teal-100 text-teal-800">IGCSE (Ages 14-16)</Badge>
                <Badge className="bg-rose-100 text-rose-800">A-Level (Ages 16-18)</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Timetable Grid */}
        <div className="grid lg:grid-cols-5 gap-6">
          {schedule.map((day, dayIndex) => (
            <Card key={dayIndex} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-t-lg">
                <CardTitle className="text-center text-lg">{day.day}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Clock className="w-4 h-4 mr-1" />
                        {session.time}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{session.subject}</h4>
                      <div className="flex flex-col gap-1">
                        <Badge className={`text-xs w-fit ${getLevelColor(session.level)}`}>
                          {session.level}
                        </Badge>
                        <Badge className={`text-xs w-fit ${getTypeColor(session.type)}`}>
                          {session.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 p-6 rounded-xl max-w-3xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling Available</h3>
            <p className="text-gray-600">
              Can't make it to our regular sessions? We offer flexible timing for individual and small group classes. 
              Weekend sessions and evening classes are also available upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}