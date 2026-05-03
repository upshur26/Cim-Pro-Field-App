const APP_DATA = {
  "modules": {
    "start_here": {
      "title": "Start Here: CIM Tech Specialist Field Mode",
      "summary": "Use this app as a daily field execution tool for construction, commissioning, energization, testing, turnover, troubleshooting, and reporting.",
      "tags": [
        "start",
        "home",
        "cim tech",
        "field mode",
        "job duties"
      ],
      "steps": [
        {
          "name": "Understand your role on site",
          "action": "Act as the bridge between construction, controls, commissioning, electrical, mechanical, vendors, engineers, PMs, and turnover teams. Verify systems are installed, communicating, operating, alarming, and documented correctly.",
          "expected": "You are not just reading checklists. You are confirming that systems actually work in the field and that issues are tracked until resolved.",
          "fail": "If responsibilities are unclear, document what you were asked to verify, who asked, what system is affected, and what support is needed."
        },
        {
          "name": "Use the app workflow",
          "action": "Start with Daily Workflow, then choose Equipment, Troubleshooting, Startup/Shutdown, Alarms, or Reports depending on the task.",
          "expected": "The app should guide what to check, what should happen, what failure means, and what to say/report.",
          "fail": "If a section does not exactly match your site, use the site drawings, SOO, MOP, manufacturer manual, and engineer direction as the source of truth."
        },
        {
          "name": "Protect uptime first",
          "action": "Before touching commands, overrides, trips, breakers, setpoints, or alarms, ask: could this affect cooling, power, safety, or tenant readiness?",
          "expected": "No surprise outages, no uncontrolled shutdowns, and no undocumented changes.",
          "fail": "If risk is unclear, pause and get authorization."
        },
        {
          "name": "Document everything",
          "action": "For every test, record system, point, command, expected result, actual result, pass/fail, issue owner, and next action.",
          "expected": "Anyone reading your report should understand what happened without you having to explain it verbally.",
          "fail": "If something fails, do not just say failed. State why it failed or what must be checked next."
        }
      ]
    },
    "daily_workflow": {
      "title": "Daily CIM Tech Workflow",
      "summary": "Start-of-shift to end-of-shift routine for construction-phase data center commissioning.",
      "tags": [
        "daily",
        "shift",
        "walkdown",
        "construction",
        "turnover"
      ],
      "steps": [
        {
          "name": "Start-of-shift alarm review",
          "action": "Open SCADA/BMS and EPMS dashboards. Check active critical, major, minor, communication, and nuisance alarms. Look for repeated alarms from overnight.",
          "expected": "Critical systems stable. No unresolved alarms that would block commissioning or energization.",
          "fail": "If alarms exist, identify affected equipment, alarm time, current state, whether it cleared, and who owns the issue."
        },
        {
          "name": "Check power chain status",
          "action": "Review utility, transformer, switchgear, UPS, generator, MOD/COD, and panel status where available. Confirm no abnormal breaker status, loss of comms, or unexpected transfers.",
          "expected": "Power path stable and equipment status matches expected construction/temporary/permanent power condition.",
          "fail": "If a power device status is unexpected or null, verify local status, comms, mapping, and whether the equipment has been commissioned."
        },
        {
          "name": "Check cooling chain status",
          "action": "Review RTUs, CRAC/CRAHs, VFDs, VAVs, supply air temp, return temp, static pressure, fan status, cooling commands, and alarms.",
          "expected": "Cooling equipment operating or available as expected. No uncontrolled short cycling, low airflow, high temp, or stuck VFD behavior.",
          "fail": "If cooling is unstable, check overrides, safeties, airflow path, controller logic, and SCADA point validity."
        },
        {
          "name": "Review scheduled work and MOPs",
          "action": "Confirm what testing is scheduled: point-to-point, functional performance, alarm testing, trip testing, energization, vendor startup, or turnover documentation.",
          "expected": "You know what is being tested, what systems are affected, who is present, and what approval exists.",
          "fail": "If work is not coordinated, do not improvise. Clarify scope with PM/engineer/Cx lead."
        },
        {
          "name": "Perform field walkdown",
          "action": "Walk the equipment. Look for open panels, unsafe access, missing labels, loose wiring, leaks, blocked coils, fan issues, abnormal noise, heat, smell, or vibration.",
          "expected": "The field condition matches what the system screen is telling you.",
          "fail": "If SCADA says normal but the field looks wrong, trust the field and investigate."
        },
        {
          "name": "Execute testing",
          "action": "Run the planned test step-by-step. Command points, observe equipment response, verify feedback, verify alarm, reset, and document result.",
          "expected": "Command, physical response, feedback, and alarm history all agree.",
          "fail": "If command works locally but not remotely, suspect SCADA mapping, controller logic, override, mode, or communication issue."
        },
        {
          "name": "End-of-shift report",
          "action": "Record completed tasks, failed tests, open issues, system state, who was notified, and next action.",
          "expected": "Clear handoff that protects uptime and your professional accountability.",
          "fail": "If something is unresolved, label it OPEN ISSUE and state required owner/support."
        }
      ]
    },
    "construction_to_turnover": {
      "title": "Complete Commissioning Process: Construction to Turnover",
      "summary": "Full lifecycle workflow from installation checks to acceptance and turnover.",
      "tags": [
        "construction",
        "commissioning",
        "turnover",
        "p2p",
        "functional testing",
        "integrated testing"
      ],
      "steps": [
        {
          "name": "Construction readiness",
          "action": "Verify equipment is installed per approved drawings: correct model, location, orientation, clearances, supports, labeling, access panels, disconnects, and housekeeping pads/anchors.",
          "expected": "Equipment is physically complete and accessible for inspection/testing.",
          "fail": "If something is missing, damaged, unlabeled, blocked, or installed differently from drawings, document as construction issue before functional testing."
        },
        {
          "name": "Mechanical readiness",
          "action": "Check filters, belts, dampers, actuators, coils, valves, drains, piping, strainers, insulation, access panels, fan rotation, and airflow path.",
          "expected": "Mechanical components are installed, move freely, and are ready for operation.",
          "fail": "If airflow is low or unit short cycles, look for closed dampers, clogged filters, incorrect fan rotation, safeties, or wrong setpoints."
        },
        {
          "name": "Electrical readiness",
          "action": "Confirm breaker/disconnect installed, control power available, terminations complete, grounding/bonding complete, fuses installed, phase rotation checked where required, and no exposed conductors.",
          "expected": "Electrical system is safe and ready for authorized energization/testing.",
          "fail": "Do not energize or command equipment if wiring, grounding, voltage, or authorization is questionable."
        },
        {
          "name": "Controls readiness",
          "action": "Confirm controller powered, network patched, status lights normal, address assigned, device discovered, program loaded, and points visible in SCADA/BMS/EPMS.",
          "expected": "Device is online and live values update.",
          "fail": "If values are null or stale, check power, patching, address, mapping, program, and database integration."
        },
        {
          "name": "Pre-functional checklist",
          "action": "Verify installation, power, mechanical condition, control wiring, safeties, communication, labels, and readiness before running equipment.",
          "expected": "All prerequisites complete before functional testing begins.",
          "fail": "If pre-functional items are incomplete, functional test results may be invalid."
        },
        {
          "name": "Point-to-point verification",
          "action": "For each input and output, physically stimulate/command the point and verify field device, controller value, SCADA value, and trend/alarm response.",
          "expected": "Field condition, controller value, and SCADA display match.",
          "fail": "If field works but SCADA does not update, mapping or communication is likely incomplete."
        },
        {
          "name": "Functional performance testing",
          "action": "Operate equipment through normal sequence: start/stop, auto/manual, setpoint changes, minimum/maximum operation, safeties, alarms, and resets.",
          "expected": "Equipment follows the SOO and returns to stable automatic operation.",
          "fail": "If equipment only works in hand/manual, check logic, mode, override, permissives, and command path."
        },
        {
          "name": "Integrated system testing",
          "action": "Test systems together: utility loss, UPS support, generator start, ATS transfer, cooling response, alarm propagation, and recovery.",
          "expected": "Systems interact correctly without loss of critical function.",
          "fail": "If one system acts correctly but another does not respond, check integration logic, network, interlocks, and sequence timing."
        },
        {
          "name": "Turnover readiness",
          "action": "Confirm tests complete, alarms verified, reports signed, settings documented, trends captured, drawings/as-builts updated, and open issues assigned.",
          "expected": "Operations can accept the system with known status and documentation.",
          "fail": "Do not call a system complete if alarms, safeties, communication, or documentation are unverified."
        }
      ]
    },
    "cim_job_duties": {
      "title": "CIM Tech Specialist Duties: Start to Finish",
      "summary": "Detailed field responsibilities for a CIM Tech Specialist in a data center construction/commissioning environment.",
      "tags": [
        "job duties",
        "cim tech specialist",
        "responsibilities",
        "construction",
        "engineers",
        "pm"
      ],
      "steps": [
        {
          "name": "Coordinate with stakeholders",
          "action": "Work with PMs, site supers, controls engineers, electrical contractors, mechanical contractors, commissioning agents, vendors, and operations contacts.",
          "expected": "Everyone understands what is being tested, what is ready, and what support is needed.",
          "fail": "If roles conflict, keep communication factual and tied to test results, drawings, SOO, and MOP."
        },
        {
          "name": "Review drawings and SOO",
          "action": "Use drawings, points lists, sequences of operation, device schedules, and network diagrams to understand expected system behavior.",
          "expected": "You know what each device should do before testing it.",
          "fail": "If the screen/system does not match drawings, document mismatch and ask for clarification."
        },
        {
          "name": "Perform system walkdowns",
          "action": "Inspect installed equipment, controls panels, network panels, VFDs, RTUs, CRAC/CRAHs, VAVs, MOD/CODs, switchgear, UPS, generator, transformer, and sensors.",
          "expected": "You identify issues before they become failed tests or downtime risks.",
          "fail": "If physical installation is incomplete, do not rely only on the app or SCADA screen."
        },
        {
          "name": "Verify controls and communication",
          "action": "Confirm controllers are powered, online, patched, addressed, mapped, programmed, and showing valid values in SCADA/BMS/EPMS.",
          "expected": "Devices show online with live point values and reliable command/feedback behavior.",
          "fail": "If null values show, suspect mapping, uncommissioned database, offline controller, or no live data source."
        },
        {
          "name": "Support testing",
          "action": "Run or support point-to-point, functional, alarm, trip, integrated, startup, shutdown, and turnover tests.",
          "expected": "Each test has clear pass/fail evidence.",
          "fail": "If a test fails, isolate whether the issue is field device, wiring, controller, logic, SCADA, communication, or sequence."
        },
        {
          "name": "Escalate correctly",
          "action": "When you need help, state: system, command, expected result, actual result, checks performed, likely cause, and requested support.",
          "expected": "PM/engineer receives useful information, not vague complaints.",
          "fail": "Avoid saying \u201cit doesn\u2019t work\u201d without the specific path tested."
        }
      ]
    },
    "safety_uptime": {
      "title": "Safety and Uptime Importance",
      "summary": "Why every commissioning step matters in a data center.",
      "tags": [
        "safety",
        "uptime",
        "risk",
        "data center"
      ],
      "steps": [
        {
          "name": "Uptime mindset",
          "action": "Treat power, cooling, controls, alarms, and communication as connected systems. A small control issue can become a cooling or power reliability issue.",
          "expected": "Testing is controlled, authorized, and documented.",
          "fail": "Unplanned overrides, bypasses, or trip tests can create outage risk."
        },
        {
          "name": "Safety before speed",
          "action": "Follow MOPs, LOTO, PPE requirements, arc-flash boundaries, confined/access rules, and site authority requirements.",
          "expected": "No test proceeds without authorization and safe conditions.",
          "fail": "If someone pressures you to perform unsafe or unauthorized action, pause and escalate."
        },
        {
          "name": "Never bypass without control",
          "action": "Do not bypass safeties, force outputs, or leave overrides active without approval, reason, time, owner, and restoration plan.",
          "expected": "Temporary changes are tracked and removed.",
          "fail": "Forgotten overrides can hide real failures and cause future downtime."
        },
        {
          "name": "Alarm importance",
          "action": "Every alarm test verifies detection, logic, display, notification, history, and reset.",
          "expected": "Operations can see and respond to real failures.",
          "fail": "If alarm does not show in SCADA, it may not protect uptime even if the local device alarms."
        }
      ]
    },
    "vfd": {
      "title": "VFD Commissioning and Troubleshooting",
      "summary": "Step-by-step VFD workflow for hand/auto testing, SCADA command, feedback, airflow/static pressure, alarms, and stuck-speed issues.",
      "tags": [
        "vfd",
        "fan",
        "static pressure",
        "auto",
        "hand",
        "override",
        "modulating"
      ],
      "steps": [
        {
          "name": "Safety and power",
          "action": "Confirm approved test, disconnect status, breaker status, no active lockout, no critical faults, and safe access.",
          "expected": "VFD powered, safe, and ready to test.",
          "fail": "If faults or unsafe conditions exist, do not force operation."
        },
        {
          "name": "Check VFD status",
          "action": "Read display/status: Ready, Run, Fault, Hand/Auto, Local/Remote, command source, frequency/speed, current, and fault history.",
          "expected": "You understand whether the VFD is being controlled locally, remotely, or blocked by fault/safety.",
          "fail": "If command source is local/hand, SCADA may not control it."
        },
        {
          "name": "Hand mode test",
          "action": "Place in HAND/local only if authorized. Command low speed such as 20\u201330%. Observe motor start, frequency, current, airflow, and vibration.",
          "expected": "Motor starts smoothly and current rises normally.",
          "fail": "If hand mode fails, suspect power, motor wiring, VFD fault, safeties, or mechanical issue."
        },
        {
          "name": "Auto mode test",
          "action": "Return to AUTO/remote. Command speed from SCADA/BMS or allow control loop to command speed.",
          "expected": "VFD follows remote command and feedback tracks command.",
          "fail": "If hand works but auto fails, suspect SCADA point, mapping, override, control loop, mode, permissive, or command source parameter."
        },
        {
          "name": "Static pressure response",
          "action": "Change duct/static pressure setpoint or create controlled demand per procedure. Watch VFD command and feedback.",
          "expected": "If static pressure is below setpoint, fan speed should generally increase. If above setpoint, speed should generally decrease.",
          "fail": "If speed stays fixed, check active overrides, disabled loop, bad pressure sensor, bad mapping, or VFD min/max limits."
        },
        {
          "name": "Feedback verification",
          "action": "Compare SCADA command, SCADA feedback, VFD display speed/frequency, and actual field behavior.",
          "expected": "All values are reasonably aligned.",
          "fail": "If SCADA says 60% but VFD display says different, mapping/feedback may be wrong."
        },
        {
          "name": "Alarm and fault testing",
          "action": "Verify VFD fault, fan status, proof, comm loss, safeties, and shutdown response where required.",
          "expected": "Fault/alarm appears locally and in SCADA with correct status and time.",
          "fail": "If local alarm exists but SCADA does not show it, check mapping and alarm enablement."
        },
        {
          "name": "What to say to PM/engineer",
          "action": "Use clear wording: The VFD operates locally, but remote SCADA/BMS control is not proving out. Likely causes are command source, active override, disabled control loop, incomplete mapping, or missing logic.",
          "expected": "Your explanation is factual and actionable.",
          "fail": "Do not just say the VFD is bad unless local and electrical checks support that."
        }
      ]
    },
    "vav": {
      "title": "VAV Commissioning and Airflow Troubleshooting",
      "summary": "Max/min airflow, damper, actuator, K-factor, reheat, sensor checks, SCADA response, and upstream dependency.",
      "tags": [
        "vav",
        "airflow",
        "k factor",
        "damper",
        "reheat",
        "static pressure"
      ],
      "steps": [
        {
          "name": "Power and comms",
          "action": "Verify VAV controller power, network connection, address, online status, and live values in SCADA/BMS.",
          "expected": "Device is online and points update.",
          "fail": "If offline/null, check power, network, address, mapping, and controller database."
        },
        {
          "name": "Mechanical inspection",
          "action": "Verify VAV mounted correctly, damper shaft connected, actuator tight, airflow pickup tubing connected correctly, and no duct obstruction.",
          "expected": "Damper can physically move and airflow sensor is connected.",
          "fail": "If damper is disconnected or tubing is wrong, controls changes will not produce valid airflow."
        },
        {
          "name": "Damper open/close test",
          "action": "Command damper fully open and fully closed. Observe actuator movement and airflow change.",
          "expected": "Damper moves smoothly and airflow changes.",
          "fail": "If command changes but damper does not move, check actuator power, signal, linkage, and override."
        },
        {
          "name": "Maximum airflow test",
          "action": "Command max airflow or max cooling mode. Confirm upstream RTU/fan/static pressure is available.",
          "expected": "Damper opens and airflow approaches design max.",
          "fail": "If airflow stays low, check upstream static pressure, VFD speed, closed damper, wrong K-factor, sensor tubing, or blocked duct."
        },
        {
          "name": "Minimum airflow test",
          "action": "Command minimum airflow or occupied minimum. Observe damper and airflow.",
          "expected": "Damper modulates down and airflow stabilizes near minimum setpoint.",
          "fail": "If airflow will not drop, check minimum setpoint, damper leakage, actuator linkage, or override."
        },
        {
          "name": "Temperature response",
          "action": "Lower zone setpoint to call for cooling and raise it to call for heating/reheat if applicable.",
          "expected": "Cooling demand opens damper; heating demand enables reheat/valve/heat stage if installed and enabled.",
          "fail": "If no response, check zone sensor, application mode, heat enable, valve wiring, and RTU supply condition."
        },
        {
          "name": "K-factor and airflow calibration",
          "action": "Compare measured airflow to controller airflow. Only adjust K-factor per balancing/commissioning direction, not as a guess.",
          "expected": "Controller airflow reasonably matches measured airflow.",
          "fail": "Changing K-factor blindly can hide real duct/static/sensor issues."
        }
      ]
    },
    "rtu": {
      "title": "RTU Commissioning and Controls Verification",
      "summary": "RTU startup, airflow, static pressure, VFD, cooling/heating, safeties, VAV relationship, and SCADA control.",
      "tags": [
        "rtu",
        "sat",
        "supply air",
        "static pressure",
        "vfd",
        "cooling",
        "heating"
      ],
      "steps": [
        {
          "name": "Pre-start inspection",
          "action": "Verify filters, belts, fans, dampers, coils, drain, gas/electric heat components, disconnect, and controls panel.",
          "expected": "RTU is mechanically and electrically ready.",
          "fail": "Missing filters, loose belts, closed dampers, or active safeties can cause low airflow and trips."
        },
        {
          "name": "Power and safeties",
          "action": "Confirm breaker/disconnect/control power and no active smoke, freeze, high temp, airflow, or emergency stop safety.",
          "expected": "Unit ready to start.",
          "fail": "Do not override life safety or equipment safeties without authorization."
        },
        {
          "name": "Fan/VFD test",
          "action": "Test fan locally/hand if authorized, then return to auto and command through BMS/SCADA.",
          "expected": "Fan speed responds, airflow increases, and feedback matches.",
          "fail": "If hand works but auto does not, check override, mapping, command source, and control loop."
        },
        {
          "name": "Static pressure control",
          "action": "Monitor duct/static pressure sensor while changing setpoint or demand. Verify VFD response.",
          "expected": "Fan speed modulates to maintain static pressure.",
          "fail": "If VFD is fixed, check sensor, control loop, override, min/max settings, or bad mapping."
        },
        {
          "name": "Cooling operation",
          "action": "Lower SAT/zone setpoint or create cooling demand per procedure. Watch compressor/valve command, fan, SAT trend, and alarms.",
          "expected": "Cooling enables and SAT drops.",
          "fail": "If cooling does not enable, check safeties, compressor/valve command, economizer lockout, sensor readings, and staging."
        },
        {
          "name": "Heating operation",
          "action": "Raise setpoint or create heat demand if applicable. Verify heat command and SAT rise.",
          "expected": "Heating starts only when enabled by sequence and safe to operate.",
          "fail": "For RTUs serving VAVs, confirm heat sequence before enabling gas/electric heat; wrong heat behavior can fight VAV cooling."
        },
        {
          "name": "Alarm testing",
          "action": "Verify high/low SAT, fan proof, filter, smoke, low airflow, and comm alarms as required.",
          "expected": "Alarm shows in controller and SCADA and resets correctly.",
          "fail": "If alarm does not show, check alarm mapping and logic enablement."
        }
      ]
    },
    "crac_crah": {
      "title": "CRAC / CRAH Commissioning",
      "summary": "Cooling unit startup, fans/VFDs, airflow, valves, chilled water, static pressure, alarms, and data center stability.",
      "tags": [
        "crac",
        "crah",
        "cooling",
        "chilled water",
        "fan",
        "static pressure",
        "uptime"
      ],
      "steps": [
        {
          "name": "Pre-start inspection",
          "action": "Verify filters, fans, coils, condensate/drain, valves, piping, sensors, VFDs, panels, and clear airflow path.",
          "expected": "Unit is clean, complete, and ready for startup.",
          "fail": "Blocked coils, missing filters, closed valves, or drain issues can cause poor cooling and alarms."
        },
        {
          "name": "Power and controls",
          "action": "Confirm disconnect/breaker/control power, controller status, network, address, and SCADA/BMS visibility.",
          "expected": "Unit is online with live values.",
          "fail": "If null values show, check mapping, controller online status, and network patching."
        },
        {
          "name": "Fan and VFD operation",
          "action": "Test fan in hand/local if authorized, then auto. Verify command, feedback, current, airflow, and no vibration.",
          "expected": "Fan responds and feedback matches command.",
          "fail": "If fan is stuck at a fixed percent, check overrides, min/max limits, command source, or disabled loop."
        },
        {
          "name": "Cooling valve/compressor response",
          "action": "Create cooling demand. Watch valve command/compressor status, supply air temp, return air temp, and chilled water temps if applicable.",
          "expected": "Cooling output increases and SAT drops/stabilizes.",
          "fail": "If command changes but SAT does not, check valve movement, chilled water availability, compressor lockout, safeties, and sensor accuracy."
        },
        {
          "name": "Static/airflow verification",
          "action": "Verify unit airflow and static pressure response under changing demand.",
          "expected": "Fan modulates and airflow remains stable.",
          "fail": "If airflow is low, check filters, fan speed, dampers, VFD, closed valves/dampers, or sensor error."
        },
        {
          "name": "Alarm testing",
          "action": "Test high temp, low airflow, condensate, filter, fan fail, comm loss, and critical shutdown alarms as required.",
          "expected": "Alarms appear in SCADA and local controller with correct priority and reset behavior.",
          "fail": "If local alarm is not in SCADA, mapping/alarm routing is incomplete."
        }
      ]
    },
    "scada_bms": {
      "title": "SCADA / BMS Commissioning",
      "summary": "Device discovery, point mapping, commands, feedback, overrides, trends, alarm propagation, and troubleshooting.",
      "tags": [
        "scada",
        "bms",
        "mapping",
        "points",
        "override",
        "null",
        "trends"
      ],
      "steps": [
        {
          "name": "Controller and network verification",
          "action": "Confirm controller powered, status lights normal, Ethernet/MS-TP connected, link lights active, network switch powered, and device address correct.",
          "expected": "Controller/device online and communicating.",
          "fail": "If offline, check power, patching, switch port, address, duplicate address, and network configuration."
        },
        {
          "name": "Device discovery",
          "action": "Confirm the device appears in SCADA/BMS with the correct name, equipment tag, address, and status.",
          "expected": "Device is visible and online.",
          "fail": "If not visible, the device may not be discovered, mapped, patched, or programmed."
        },
        {
          "name": "Input point verification",
          "action": "Verify temperature, pressure, airflow, status, fault, and analog values. Compare SCADA to controller/local reading.",
          "expected": "Values update and are reasonable.",
          "fail": "If null/stale/unreasonable, check sensor wiring, mapping, data type, scaling, and controller program."
        },
        {
          "name": "Output point verification",
          "action": "Command start/stop, damper, valve, fan speed, setpoint, or reset. Verify field response and feedback.",
          "expected": "Command changes the field device and feedback confirms response.",
          "fail": "If command changes but field does not respond, check output wiring, logic, mode, override, safeties, and permissives."
        },
        {
          "name": "Override control",
          "action": "Apply override only when authorized. Record point, value, reason, time, and removal plan. Remove override and verify automatic control resumes.",
          "expected": "Override works, then system returns to normal auto control.",
          "fail": "If device remains stuck, another override, loop setting, local mode, or logic block may still be active."
        },
        {
          "name": "Trends and history",
          "action": "Verify trends capture important points: temperature, pressure, airflow, command, feedback, alarms, and status.",
          "expected": "Data updates over time and supports troubleshooting.",
          "fail": "If trends do not update, check trend configuration and point validity."
        },
        {
          "name": "Alarm propagation",
          "action": "Trigger alarms and verify controller, SCADA display, alarm history, and notification path.",
          "expected": "Alarm appears correctly and clears/resets after condition is removed.",
          "fail": "If it flashes locally but not in SCADA, mapping/routing/logic may be incomplete."
        }
      ]
    },
    "epms": {
      "title": "EPMS Commissioning",
      "summary": "Electrical Power Monitoring System checks for meters, breakers, UPS, generator, switchgear, MOD/COD, alarms, and data validity.",
      "tags": [
        "epms",
        "power monitoring",
        "meters",
        "breaker status",
        "electrical",
        "mod",
        "cod"
      ],
      "steps": [
        {
          "name": "Verify EPMS communication",
          "action": "Confirm meters/devices are online in EPMS: switchgear, UPS, generator, transformers, MOD/COD, PDUs, and breakers as applicable.",
          "expected": "Devices online with live readings.",
          "fail": "If offline, check meter power, network, protocol address, gateway, and mapping."
        },
        {
          "name": "Verify electrical readings",
          "action": "Compare EPMS voltage, current, kW, kVA, frequency, breaker status, and alarm data to local meter/display when possible.",
          "expected": "EPMS values match local equipment reasonably.",
          "fail": "If readings are wrong, check CT/PT configuration, scaling, wiring, phase orientation, and mapping."
        },
        {
          "name": "Breaker status verification",
          "action": "Open/close or simulate status per MOP. Verify EPMS status changes correctly.",
          "expected": "Open/closed/tripped status displays correctly and logs event.",
          "fail": "If status is wrong, check auxiliary contacts, wiring, point mapping, and logic."
        },
        {
          "name": "Alarm verification",
          "action": "Verify overcurrent, trip, comm loss, UPS alarms, generator alarms, and breaker alarms appear in EPMS/SCADA as required.",
          "expected": "Alarms show with correct equipment name, priority, and timestamp.",
          "fail": "If alarm exists locally but not in EPMS, check integration/mapping."
        }
      ]
    },
    "plc_allen_bradley": {
      "title": "PLC / Allen-Bradley Commissioning",
      "summary": "PLC power, RUN status, program, logic, I/O, safety trips, SCADA integration, and what software is used.",
      "tags": [
        "plc",
        "allen bradley",
        "studio 5000",
        "rslogix",
        "logic",
        "i/o"
      ],
      "steps": [
        {
          "name": "Know the tool",
          "action": "Allen-Bradley PLCs are commonly configured/programmed with Rockwell software such as Studio 5000 Logix Designer for ControlLogix/CompactLogix and Connected Components Workbench for some smaller controllers/drives.",
          "expected": "You know whether you are observing/verifying or actually authorized to program.",
          "fail": "Do not change PLC logic without authorization and backups."
        },
        {
          "name": "PLC power and mode",
          "action": "Check PLC power supply, CPU status lights, RUN/PROGRAM mode, fault lights, I/O module status, and network module status.",
          "expected": "PLC powered, no major fault, and in correct mode for operation/testing.",
          "fail": "If PLC is in PROGRAM or faulted, outputs may not respond."
        },
        {
          "name": "Program verification",
          "action": "Confirm correct program loaded, latest approved version, no major errors, and logic matches SOO/test procedure.",
          "expected": "PLC logic supports the intended sequence.",
          "fail": "Wrong or missing program can make field devices appear broken."
        },
        {
          "name": "Input verification",
          "action": "Stimulate field inputs: safeties, status contacts, sensors, trip contacts, alarm contacts. Verify PLC input changes.",
          "expected": "Input changes in PLC match field condition.",
          "fail": "If field changes but PLC does not, check wiring, module, input address, and device contact."
        },
        {
          "name": "Output verification",
          "action": "Command outputs per procedure: relays, starters, valves, dampers, enables, resets. Verify field device responds.",
          "expected": "PLC output energizes and field response occurs.",
          "fail": "If PLC output changes but device does not respond, check relay, wiring, interlock, local mode, or device fault."
        },
        {
          "name": "SCADA integration",
          "action": "Verify PLC tags/points are mapped into SCADA/BMS/EPMS with correct names, scaling, alarm limits, and statuses.",
          "expected": "SCADA shows live PLC data and commands are accepted if intended.",
          "fail": "If PLC value changes but SCADA does not, integration mapping is likely incomplete."
        },
        {
          "name": "Safety logic and trips",
          "action": "Test E-stop, high temp, low airflow, overcurrent, or required trip inputs per MOP. Verify PLC response, equipment shutdown, alarm, and reset.",
          "expected": "System enters safe state and does not restart until reset/permissives are normal.",
          "fail": "If trip input changes but no action occurs, safety logic may not be enabled or wired correctly."
        }
      ]
    },
    "alarm_trip_testing": {
      "title": "Alarm and Trip Testing",
      "summary": "Full workflow for alarm generation, SCADA display, logging, notification, shutdown behavior, reset, and documentation.",
      "tags": [
        "alarm",
        "trip",
        "testing",
        "reset",
        "mapping",
        "safety"
      ],
      "steps": [
        {
          "name": "Pre-test authorization",
          "action": "Confirm MOP/test script, affected equipment, people present, expected response, and whether the test is alarm-only or actual shutdown/trip.",
          "expected": "Everyone understands the test and impact.",
          "fail": "Never trip equipment without approved procedure and support."
        },
        {
          "name": "Verify alarm point exists",
          "action": "Confirm the alarm exists in controller and SCADA, is enabled, has correct name/priority, and is not suppressed.",
          "expected": "Point is ready to alarm when condition occurs.",
          "fail": "If point does not exist, the field test may work but SCADA will not show it."
        },
        {
          "name": "Trigger condition",
          "action": "Trigger the alarm by approved method: jumper/contact simulation, sensor simulation, test button, disconnect comms, or controlled fault simulation.",
          "expected": "Alarm condition occurs and is visible at local/controller level.",
          "fail": "If condition does not occur, check wiring, sensor, contact, or test method."
        },
        {
          "name": "Verify SCADA/EPMS display",
          "action": "Confirm alarm appears on SCADA/EPMS active alarm page, equipment graphic, alarm history, and notification path if required.",
          "expected": "Correct alarm, correct equipment, correct priority, correct timestamp.",
          "fail": "If local works but SCADA does not, mapping/logic/routing is incomplete."
        },
        {
          "name": "Verify trip response",
          "action": "For trip tests, verify equipment shuts down or changes state exactly as the SOO requires.",
          "expected": "Equipment enters safe state and status feedback confirms shutdown/trip.",
          "fail": "If alarm shows but equipment does not shut down, trip logic or safety wiring may be missing."
        },
        {
          "name": "Reset verification",
          "action": "Remove alarm condition, reset locally/SCADA as required, and verify equipment is ready before restart.",
          "expected": "Alarm clears and does not immediately return.",
          "fail": "If alarm returns, the real condition may still exist or reset logic is incomplete."
        },
        {
          "name": "Document result",
          "action": "Record trigger method, expected response, actual response, pass/fail, screenshots/photos if allowed, and open issues.",
          "expected": "Test evidence is clear for turnover.",
          "fail": "Do not mark pass if alarm appears but notification, logging, reset, or trip behavior fails."
        }
      ]
    },
    "mod_cod": {
      "title": "MOD / COD Commissioning",
      "summary": "Modular distribution and cabinet output distribution workflow: installation, power, breaker, EPMS/SCADA, alarms, load, and turnover.",
      "tags": [
        "mod",
        "cod",
        "power",
        "breaker",
        "data center",
        "distribution"
      ],
      "steps": [
        {
          "name": "Safety and authorization",
          "action": "Confirm approved MOP, LOTO status, PPE, arc-flash boundary, authorized personnel, and test scope.",
          "expected": "Safe authorized test conditions.",
          "fail": "Do not energize, open, close, or trip breakers without approval."
        },
        {
          "name": "Visual inspection",
          "action": "Verify equipment installed, anchored, labeled, no damage, doors/panels secure, breakers installed, and clearances maintained.",
          "expected": "MOD/COD physically ready.",
          "fail": "Missing labels or wrong equipment tag can create turnover and safety issues."
        },
        {
          "name": "Wiring and grounding",
          "action": "Check power wiring, control wiring, grounding/bonding, terminations, and cable identification.",
          "expected": "Wiring complete and secure.",
          "fail": "Loose or wrong wiring can cause nuisance trips, bad status, or unsafe operation."
        },
        {
          "name": "Voltage and phase checks",
          "action": "Measure incoming/output voltage and phase rotation where required by authorized personnel/procedure.",
          "expected": "Correct voltage and phase sequence.",
          "fail": "Wrong phase rotation or voltage can damage downstream equipment."
        },
        {
          "name": "Breaker operation",
          "action": "Operate breakers per procedure. Verify open/closed/tripped status locally and in EPMS/SCADA.",
          "expected": "Status changes correctly and logs event.",
          "fail": "If local changes but EPMS does not, check auxiliary contact, wiring, mapping."
        },
        {
          "name": "Trip/alarm testing",
          "action": "Simulate breaker trip, overcurrent, or comm loss as required. Verify alarm path.",
          "expected": "Alarm/trip visible in EPMS/SCADA with correct name/time.",
          "fail": "If alarm does not show, point may not be mapped or logic enabled."
        },
        {
          "name": "Load verification",
          "action": "Apply/verify downstream load per procedure. Monitor current, voltage, heat, smell, alarms, and stability.",
          "expected": "Stable operation with no abnormal heating or alarms.",
          "fail": "If overload or imbalance appears, stop per MOP and investigate load/wiring."
        }
      ]
    },
    "switchgear": {
      "title": "Switchgear Commissioning",
      "summary": "High-risk power workflow for installation, breaker operation, relay/trip testing, EPMS, alarms, and turnover.",
      "tags": [
        "switchgear",
        "breaker",
        "relay",
        "trip",
        "power",
        "arc flash"
      ],
      "steps": [
        {
          "name": "MOP and safety boundary",
          "action": "Confirm energization/test MOP, arc-flash requirements, PPE, roles, communication plan, emergency stop plan, and authorized operators.",
          "expected": "Controlled test with clear authority.",
          "fail": "If roles or risk are unclear, stop and clarify."
        },
        {
          "name": "Physical inspection",
          "action": "Check anchoring, bus condition, doors, covers, labels, heaters, vents, grounds, control wiring, power cables, and cleanliness.",
          "expected": "Switchgear ready for electrical testing/operation.",
          "fail": "Debris, loose hardware, or missing covers are serious issues."
        },
        {
          "name": "Breaker racking/status",
          "action": "Verify breaker position indication: disconnected/test/connected as applicable. Operate only per MOP and manufacturer procedure.",
          "expected": "Position and status indications are correct locally and remotely.",
          "fail": "Incorrect indication can cause unsafe assumptions."
        },
        {
          "name": "Open/close function",
          "action": "Command breaker open/close from approved control point. Verify local status, EPMS status, and event log.",
          "expected": "Breaker operates cleanly and status updates.",
          "fail": "If control command fails, check control power, permissives, interlocks, trip coil/close coil, and logic."
        },
        {
          "name": "Protective relay settings",
          "action": "Verify relay settings match approved coordination study/design: overcurrent, ground fault, instantaneous, time delay, and alarms.",
          "expected": "Settings match approved documentation.",
          "fail": "Wrong settings can cause nuisance trips or failure to trip."
        },
        {
          "name": "Trip testing",
          "action": "Perform secondary injection/test set or approved trip simulation with qualified personnel. Verify breaker trip, relay event, alarm, and EPMS log.",
          "expected": "Trip occurs as expected and is recorded.",
          "fail": "If relay sees fault but breaker does not trip, check trip circuit, coil, wiring, and interlocks."
        },
        {
          "name": "EPMS/SCADA verification",
          "action": "Verify breaker status, trip, lockout, voltage, current, power, and alarms display correctly.",
          "expected": "Remote monitoring reflects actual gear state.",
          "fail": "If EPMS is wrong, check mapping, CT/PT setup, aux contacts, and comms."
        }
      ]
    },
    "generator": {
      "title": "Generator Commissioning",
      "summary": "Generator startup, controls, ATS transfer, load test, alarms, shutdowns, SCADA/EPMS, and turnover.",
      "tags": [
        "generator",
        "ats",
        "emergency power",
        "fuel",
        "load test"
      ],
      "steps": [
        {
          "name": "Pre-start inspection",
          "action": "Check fuel, oil, coolant, battery voltage, charger, exhaust, radiator, block heater, leaks, enclosure, and emergency stop status.",
          "expected": "Generator mechanically ready and no active lockouts/faults.",
          "fail": "Low fuel, weak batteries, or active E-stop can block start."
        },
        {
          "name": "Manual/local start",
          "action": "Start generator locally per procedure. Observe crank, start time, oil pressure, coolant temp, voltage, frequency, vibration, and alarms.",
          "expected": "Smooth start, stable voltage/frequency, no abnormal noise or smoke.",
          "fail": "If it fails to start, check batteries, fuel, starter, E-stop, controller faults, and permissives."
        },
        {
          "name": "Remote/auto start",
          "action": "Place in AUTO and simulate start request per MOP. Verify remote start command and feedback.",
          "expected": "Generator starts from automatic signal.",
          "fail": "If local works but auto fails, check ATS signal, controller input, remote start wiring, and mode."
        },
        {
          "name": "ATS transfer sequence",
          "action": "Simulate utility loss or use test mode. Verify generator start, voltage/frequency acceptance, ATS transfer, load carry, and retransfer.",
          "expected": "Load remains supported and sequence matches SOO.",
          "fail": "If generator starts but transfer does not occur, check ATS permissives, time delays, voltage sensing, and logic."
        },
        {
          "name": "Load testing",
          "action": "Apply load bank or building load per procedure. Monitor kW, current, voltage, frequency, temperature, oil pressure, and alarms.",
          "expected": "Generator carries load stably.",
          "fail": "If voltage/frequency droop or overheating occurs, stop per MOP and investigate."
        },
        {
          "name": "Alarm/shutdown verification",
          "action": "Test low fuel, battery charger fail, common alarm, overspeed/high temp/low oil as allowed by procedure.",
          "expected": "Alarms show locally and in SCADA/EPMS. Shutdowns behave correctly.",
          "fail": "Never simulate damaging conditions without approved method."
        }
      ]
    },
    "transformer": {
      "title": "Transformer Commissioning",
      "summary": "Transformer visual, grounding, insulation, energization, voltage, temperature, alarms, and downstream stability.",
      "tags": [
        "transformer",
        "voltage",
        "megger",
        "ground",
        "tap",
        "power"
      ],
      "steps": [
        {
          "name": "Visual and nameplate verification",
          "action": "Confirm transformer matches drawings: kVA, voltage, phase, impedance, tap settings, location, ventilation, labels, and physical condition.",
          "expected": "Installed transformer matches design.",
          "fail": "Wrong voltage/kVA/tap setting can cause downstream issues."
        },
        {
          "name": "Grounding and bonding",
          "action": "Verify ground conductor, bonding jumpers, neutral/ground configuration as designed, and tight connections.",
          "expected": "Safe grounding path complete.",
          "fail": "Missing/incorrect grounding is a serious safety issue."
        },
        {
          "name": "Insulation testing",
          "action": "Verify megger/insulation resistance testing has been completed by qualified personnel per site/manufacturer requirements.",
          "expected": "Insulation readings acceptable before energization.",
          "fail": "Low resistance may indicate moisture, damage, or wiring fault."
        },
        {
          "name": "Energization",
          "action": "Energize per MOP. Observe sound, smell, heat, smoke, vibration, and protection trips.",
          "expected": "Transformer energizes smoothly with normal hum and no alarms.",
          "fail": "Abnormal noise, smoke, or trip requires immediate stop/investigation."
        },
        {
          "name": "Secondary voltage verification",
          "action": "Measure secondary voltage phase-to-phase and phase-to-ground. Compare to design and tap setting.",
          "expected": "Correct stable voltage.",
          "fail": "If voltage is high/low, check tap setting, primary voltage, wiring, and load."
        },
        {
          "name": "Load and temperature monitoring",
          "action": "Monitor load, temperature, ventilation, fans if present, and downstream stability.",
          "expected": "Stable voltage and normal temperature under load.",
          "fail": "Overheating may indicate overload, poor ventilation, or internal issue."
        }
      ]
    },
    "ups": {
      "title": "UPS Commissioning",
      "summary": "UPS input/output, battery, bypass, transfer, alarms, EPMS/SCADA, load, and uptime protection.",
      "tags": [
        "ups",
        "battery",
        "bypass",
        "transfer",
        "critical power"
      ],
      "steps": [
        {
          "name": "Physical and safety inspection",
          "action": "Verify UPS, battery cabinets, clearances, ventilation, EPO status, grounding, wiring, and no visible damage.",
          "expected": "UPS ready for startup/testing.",
          "fail": "Battery and UPS systems carry high energy; follow MOP and qualified direction."
        },
        {
          "name": "Input and output power",
          "action": "Verify input voltage/frequency and output voltage/frequency using approved procedure. Confirm normal mode status.",
          "expected": "Stable input and output power.",
          "fail": "Incorrect input or output may indicate wiring/configuration issue."
        },
        {
          "name": "Battery verification",
          "action": "Check battery status, charge level, charger status, battery temperature, alarms, and self-test result.",
          "expected": "Battery system healthy and available.",
          "fail": "Battery faults reduce ride-through capability."
        },
        {
          "name": "Bypass verification",
          "action": "Verify maintenance/static bypass status and indications per MOP.",
          "expected": "Bypass states are known and indicated correctly.",
          "fail": "Wrong bypass state can create unexpected exposure or loss of protection."
        },
        {
          "name": "Transfer to battery",
          "action": "Simulate input loss or use approved test mode. Verify load remains powered and UPS transfers correctly.",
          "expected": "No interruption to supported load.",
          "fail": "If transfer fails or load drops, stop and escalate immediately."
        },
        {
          "name": "Alarm/EPMS/SCADA",
          "action": "Verify common alarm, battery alarm, bypass alarm, overload, comm loss, and status points.",
          "expected": "Alarms and status show correctly in monitoring systems.",
          "fail": "If local alarm is not visible remotely, mapping/integration is incomplete."
        }
      ]
    },
    "startup_shutdown": {
      "title": "Startup / Shutdown Sequences",
      "summary": "Safe standardized approach for starting, stopping, energizing, and returning systems to automatic control.",
      "tags": [
        "startup",
        "shutdown",
        "energization",
        "loto",
        "auto"
      ],
      "steps": [
        {
          "name": "Pre-start authorization",
          "action": "Confirm MOP, scope, personnel, impact, LOTO status, PPE, and communication plan.",
          "expected": "Authorized and controlled start.",
          "fail": "Do not start equipment just because someone says to; confirm authority and impact."
        },
        {
          "name": "Pre-start checks",
          "action": "Check power, safeties, alarms, fluid levels, airflow path, valves/dampers, and controls mode.",
          "expected": "No active condition blocking safe start.",
          "fail": "If a safety is active, fix cause before restart."
        },
        {
          "name": "Start command",
          "action": "Start locally or remotely as directed. Observe physical response, status, feedback, current, temps, pressure, airflow, and alarms.",
          "expected": "Equipment starts smoothly and stabilizes.",
          "fail": "If command is present but no response, check permissives, mode, local/remote, safeties, and output path."
        },
        {
          "name": "Return to auto",
          "action": "After manual testing, remove overrides and return equipment to automatic control. Verify control loop resumes.",
          "expected": "System controls itself without manual hold.",
          "fail": "Forgotten overrides are a major commissioning risk."
        },
        {
          "name": "Shutdown notification",
          "action": "Notify affected personnel and verify impact before stopping equipment.",
          "expected": "No surprise loss of cooling/power/control.",
          "fail": "Uncoordinated shutdowns can create uptime risk."
        },
        {
          "name": "Stop and verify",
          "action": "Stop equipment per procedure. Confirm actual stop, feedback, alarm state, and safe condition.",
          "expected": "Equipment stops cleanly and system remains safe.",
          "fail": "If it does not stop, check command path, control relay, VFD mode, or stuck contactor."
        },
        {
          "name": "Post-shutdown documentation",
          "action": "Record reason, time, equipment state, remaining hazards, LOTO, and next action.",
          "expected": "Clear handoff and accountability.",
          "fail": "Do not leave system status unclear."
        }
      ]
    },
    "troubleshooting": {
      "title": "Troubleshooting Decision Trees",
      "summary": "Fast field logic for no comms, null values, stuck VFD, no SCADA control, alarms not showing, and units not starting.",
      "tags": [
        "troubleshoot",
        "decision tree",
        "null",
        "no comms",
        "not responding",
        "override"
      ],
      "steps": [
        {
          "name": "Device not responding to SCADA",
          "action": "Check in order: power, local controller status, network/link lights, address, online status, point mapping, command source, local/remote mode, safeties, overrides, logic/permissives.",
          "expected": "You isolate where the command path breaks.",
          "fail": "If powered and local works but SCADA does not, likely mapping, logic, override, or communication."
        },
        {
          "name": "Points showing null",
          "action": "Check if device is online, controller is communicating, point exists in database, data type/scaling is correct, program is loaded, and integration is enabled.",
          "expected": "Live valid data appears.",
          "fail": "Null means SCADA does not have valid data; it does not always mean the equipment is off."
        },
        {
          "name": "Alarm not changing when jumped",
          "action": "Verify you are jumping the correct point, correct contact type, controller sees input change, logic is enabled, alarm point is mapped, and SCADA alarm page is configured.",
          "expected": "Input changes at controller and alarm displays in SCADA.",
          "fail": "If controller input changes but SCADA does not, issue is mapping/logic/alarm routing."
        },
        {
          "name": "VFD stuck at fixed percent",
          "action": "Check hand/auto, local/remote, active override, minimum/maximum speed, control loop, static pressure sensor, command source, safeties, and feedback mapping.",
          "expected": "VFD modulates based on command/demand.",
          "fail": "If it remains fixed, do not assume VFD bad until command source and overrides are verified."
        },
        {
          "name": "Unit not starting",
          "action": "Check power, control power, safeties, fault history, mode, start command, permissives, output relay, starter/VFD, and proof status.",
          "expected": "Start path is identified.",
          "fail": "If start command exists but output does not, check logic/permissives. If output exists but unit does not start, check field wiring/equipment."
        },
        {
          "name": "SCADA not controlling but local works",
          "action": "State clearly: Local operation proves the equipment can run; remote control path is not proven. Check SCADA point, controller logic, command source, override, mapping, and network.",
          "expected": "You separate equipment problem from control/integration problem.",
          "fail": "Do not let people call it a mechanical failure without proving command path."
        }
      ]
    },
    "pm_wording": {
      "title": "What to Say to PM / Engineer",
      "summary": "Clear professional wording for common field issues.",
      "tags": [
        "pm",
        "engineer",
        "wording",
        "status update",
        "communication"
      ],
      "steps": [
        {
          "name": "SCADA not controlling device",
          "action": "Say: The device appears capable of operating locally, but it is not responding properly to SCADA commands. The likely issue is in the remote command path, such as mapping, controller logic, override status, command source, or communication.",
          "expected": "Message is clear and does not blame the wrong trade prematurely.",
          "fail": "Avoid vague wording like 'it is broken'."
        },
        {
          "name": "Alarm not showing",
          "action": "Say: The alarm condition was created at the field/controller level, but the alarm is not appearing correctly in SCADA. This points toward alarm mapping, logic enablement, routing, or database configuration needing review.",
          "expected": "Engineer knows where to look next.",
          "fail": "Do not mark alarm test passed if only local response works."
        },
        {
          "name": "VFD stuck/limited airflow",
          "action": "Say: The fan/VFD response appears limited under automatic control. We need to verify active overrides, command source, control loop status, static pressure input, min/max limits, and feedback mapping before calling it a VFD failure.",
          "expected": "Keeps troubleshooting organized.",
          "fail": "Do not keep changing random values without a baseline."
        },
        {
          "name": "Point showing null",
          "action": "Say: The point is currently showing null, which means SCADA is not receiving a valid live value. The next checks are device communication, controller status, point mapping, data type/scaling, and whether the point has been commissioned into the database.",
          "expected": "Explains null in simple terms.",
          "fail": "Null does not automatically prove the field device has no power."
        },
        {
          "name": "Need support without sounding weak",
          "action": "Say: I verified the field condition and the screen response. The issue appears to be beyond field operation and needs controls/engineering review for mapping, logic, or integration confirmation.",
          "expected": "Shows ownership and professionalism.",
          "fail": "Do not say you have no idea; say what you verified and what is next."
        }
      ]
    },
    "kmc_connect": {
      "title": "KMC Connect / Controller Checks",
      "summary": "Basic field workflow for KMC-style controller verification, overrides, setpoints, outputs, and why changes may not respond.",
      "tags": [
        "kmc",
        "kmc connect",
        "controller",
        "override",
        "setpoint"
      ],
      "steps": [
        {
          "name": "Confirm you are on the right controller",
          "action": "Verify controller name, equipment tag, network address, and points match the device you are testing.",
          "expected": "Changes apply to the intended equipment.",
          "fail": "Wrong controller/page can make it look like equipment is not responding."
        },
        {
          "name": "Check point value and priority/override",
          "action": "Look for active overrides, manual values, priority arrays, or commanded values being held by another system.",
          "expected": "Point is free to respond to automatic logic when override removed.",
          "fail": "If another override is active downstream/upstream, your change may not take effect."
        },
        {
          "name": "Setpoint change verification",
          "action": "Change setpoint in a controlled way, then watch command output, feedback, and actual equipment response.",
          "expected": "Loop reacts after normal delay.",
          "fail": "If setpoint changes but output does not, loop may be disabled, not in auto, saturated, or blocked by safeties."
        },
        {
          "name": "Manual command test",
          "action": "Command output only when authorized. Observe whether the physical device moves/runs and whether feedback changes.",
          "expected": "Manual command proves output path and field device response.",
          "fail": "If manual command works but auto does not, the issue is logic, mode, or override."
        },
        {
          "name": "Return to normal",
          "action": "Remove manual values/overrides and verify automatic control resumes.",
          "expected": "Equipment no longer held artificially.",
          "fail": "Leaving overrides active can create future failures."
        }
      ]
    },
    "data_center_equipment_facts": {
      "title": "Facts and Knowledge: Data Center Systems",
      "summary": "Quick plain-language explanations of common equipment and terms.",
      "tags": [
        "facts",
        "knowledge",
        "terms",
        "mods",
        "cods",
        "bms",
        "epms",
        "scada"
      ],
      "steps": [
        {
          "name": "BMS / BAS",
          "action": "Building Management/Automation System controls and monitors mechanical/environmental systems like RTUs, CRAC/CRAHs, VAVs, valves, dampers, fans, temperatures, pressure, alarms, and trends.",
          "expected": "Think HVAC/environmental control.",
          "fail": "BMS is not the same as EPMS, though they may share data."
        },
        {
          "name": "EPMS",
          "action": "Electrical Power Monitoring System monitors electrical power equipment, meters, breakers, UPS, generators, switchgear, transformers, MOD/CODs, and power quality/status.",
          "expected": "Think power monitoring and electrical alarms.",
          "fail": "EPMS may monitor but not always control equipment."
        },
        {
          "name": "SCADA",
          "action": "Supervisory Control and Data Acquisition system provides monitoring/control graphics, alarms, trends, and integration for many systems.",
          "expected": "Think command center/interface layer.",
          "fail": "SCADA can show data that depends on field controllers, PLCs, BMS, or EPMS mapping."
        },
        {
          "name": "MOD / COD",
          "action": "MODs and CODs distribute power downstream to IT/equipment loads with breakers, monitoring, and alarms. They are not simply transformers.",
          "expected": "They are distribution equipment in the power chain.",
          "fail": "Do not confuse them with transformers, though they are connected in the electrical distribution path."
        },
        {
          "name": "VFD",
          "action": "Variable Frequency Drive controls motor speed by changing output frequency/voltage to the motor. Used on fans and pumps to modulate airflow/flow.",
          "expected": "Speed should respond to command/demand when in auto and not overridden.",
          "fail": "A fixed speed can be caused by logic/override/command source, not only drive failure."
        },
        {
          "name": "BACnet",
          "action": "BACnet is a communication protocol used by building automation devices. It is not itself a BMS; it is one way devices talk to a BMS/SCADA.",
          "expected": "Device address/network settings matter.",
          "fail": "Wrong or duplicate address causes communication problems."
        }
      ]
    },
    "reports": {
      "title": "Reports and Field Notes",
      "summary": "Log pass/fail/open issue reports and export/share them.",
      "tags": [
        "report",
        "notes",
        "export",
        "documentation"
      ],
      "steps": [
        {
          "name": "Use report builder",
          "action": "Open the Report tab, enter equipment/system, status, notes, and next action, then save/export.",
          "expected": "Report can be shared as text from your phone.",
          "fail": "If you do not document it, it becomes your word against memory later."
        },
        {
          "name": "Best field report format",
          "action": "Use: system, test, expected result, actual result, issue found, checks completed, who notified, next action.",
          "expected": "PM/engineer can act without chasing you for basics.",
          "fail": "Avoid emotional wording. Keep it factual and tied to evidence."
        }
      ]
    },
    "equipment_index": {
      "title": "Equipment Index",
      "summary": "Fast access to all major equipment and systems.",
      "tags": [
        "equipment",
        "index",
        "systems"
      ],
      "steps": [
        {
          "name": "VFD Commissioning and Troubleshooting",
          "action": "Step-by-step VFD workflow for hand/auto testing, SCADA command, feedback, airflow/static pressure, alarms, and stuck-speed issues.",
          "expected": "Open this equipment module from search or dashboard.",
          "fail": "Use site-specific MOP/drawings when they override general guidance."
        },
        {
          "name": "VAV Commissioning and Airflow Troubleshooting",
          "action": "Max/min airflow, damper, actuator, K-factor, reheat, sensor checks, SCADA response, and upstream dependency.",
          "expected": "Open this equipment module from search or dashboard.",
          "fail": "Use site-specific MOP/drawings when they override general guidance."
        },
        {
          "name": "RTU Commissioning and Controls Verification",
          "action": "RTU startup, airflow, static pressure, VFD, cooling/heating, safeties, VAV relationship, and SCADA control.",
          "expected": "Open this equipment module from search or dashboard.",
          "fail": "Use site-specific MOP/drawings when they override general guidance."
        },
        {
          "name": "CRAC / CRAH Commissioning",
          "action": "Cooling unit startup, fans/VFDs, airflow, valves, chilled water, static pressure, alarms, and data center stability.",
          "expected": "Open this equipment module from search or dashboard.",
          "fail": "Use site-specific MOP/drawings when they override general guidance."
        },
        {
          "name": "SCADA / BMS Commissioning",
          "action": "Device discovery, point mapping, commands, feedback, overrides, trends, alarm propagation, and troubleshooting.",
          "expected": "Open this equipment module from search or dashboard.",
          "fail": "Use site-specific MOP/drawings when they override general guidance."
        },
        {
          "name": "EPMS Commissioning",
          "action": "Electrical Power Monitoring System checks for meters, breakers, UPS, generator, switchgear, MOD/COD, alarms, and data validity.",
          "expected": "Open this equipment module from search or dashboard.",
          "fail": "Use site-specific MOP/drawings when they override general guidance."
        },
        {
          "name": "PLC / Allen-Bradley Commissioning",
          "action": "PLC power, RUN status, program, logic, I/O, safety trips, SCADA integration, and what software is used.",
          "expected": "Open this equipment module from search or dashboard.",
          "fail": "Use site-specific MOP/drawings when they override general guidance."
        },
        {
          "name": "MOD / COD Commissioning",
          "action": "Modular distribution and cabinet output distribution workflow: installation, power, breaker, EPMS/SCADA, alarms, load, and turnover.",
          "expected": "Open this equipment module from search or dashboard.",
          "fail": "Use site-specific MOP/drawings when they override general guidance."
        },
        {
          "name": "Switchgear Commissioning",
          "action": "High-risk power workflow for installation, breaker operation, relay/trip testing, EPMS, alarms, and turnover.",
          "expected": "Open this equipment module from search or dashboard.",
          "fail": "Use site-specific MOP/drawings when they override general guidance."
        },
        {
          "name": "Generator Commissioning",
          "action": "Generator startup, controls, ATS transfer, load test, alarms, shutdowns, SCADA/EPMS, and turnover.",
          "expected": "Open this equipment module from search or dashboard.",
          "fail": "Use site-specific MOP/drawings when they override general guidance."
        },
        {
          "name": "Transformer Commissioning",
          "action": "Transformer visual, grounding, insulation, energization, voltage, temperature, alarms, and downstream stability.",
          "expected": "Open this equipment module from search or dashboard.",
          "fail": "Use site-specific MOP/drawings when they override general guidance."
        },
        {
          "name": "UPS Commissioning",
          "action": "UPS input/output, battery, bypass, transfer, alarms, EPMS/SCADA, load, and uptime protection.",
          "expected": "Open this equipment module from search or dashboard.",
          "fail": "Use site-specific MOP/drawings when they override general guidance."
        },
        {
          "name": "KMC Connect / Controller Checks",
          "action": "Basic field workflow for KMC-style controller verification, overrides, setpoints, outputs, and why changes may not respond.",
          "expected": "Open this equipment module from search or dashboard.",
          "fail": "Use site-specific MOP/drawings when they override general guidance."
        },
        {
          "name": "Facts and Knowledge: Data Center Systems",
          "action": "Quick plain-language explanations of common equipment and terms.",
          "expected": "Open this equipment module from search or dashboard.",
          "fail": "Use site-specific MOP/drawings when they override general guidance."
        }
      ]
    },
    "creator_about": {
      "title": "Creator / Ownership",
      "summary": "Creator ownership and professional app information for O. Upshur.",
      "tags": [
        "creator",
        "ownership",
        "about",
        "author",
        "version"
      ],
      "steps": [
        {
          "name": "Creator",
          "action": "This app was created and maintained by O. Upshur.",
          "expected": "Creator: O. Upshur. Role: CIM Tech Specialist.",
          "fail": "Do not remove creator ownership when sharing or modifying this app."
        },
        {
          "name": "Purpose",
          "action": "This app is designed as a field execution tool for CIM commissioning, troubleshooting, startup/shutdown, alarm testing, safety, uptime, reporting, and turnover support.",
          "expected": "Users can navigate quickly while still accessing detailed commissioning guidance.",
          "fail": "This app does not replace site MOPs, drawings, SOO, manufacturer procedures, or authorized safety direction."
        },
        {
          "name": "Version",
          "action": "Version 6.0, creator embedded update completed on 2026-05-03.",
          "expected": "Creator ownership appears in app header, Creator screen, app metadata, README, and exported reports.",
          "fail": "If a hosted version only shows the About page, the wrong ZIP/version was uploaded."
        }
      ]
    }
  },
  "home": [
    [
      "start_here",
      "Start Here"
    ],
    [
      "daily_workflow",
      "Daily"
    ],
    [
      "construction_to_turnover",
      "Commissioning"
    ],
    [
      "cim_job_duties",
      "CIM Duties"
    ],
    [
      "safety_uptime",
      "Safety/Uptime"
    ],
    [
      "equipment_index",
      "Equipment"
    ],
    [
      "troubleshooting",
      "Troubleshoot"
    ],
    [
      "startup_shutdown",
      "Start/Stop"
    ],
    [
      "alarm_trip_testing",
      "Alarms/Trips"
    ],
    [
      "pm_wording",
      "PM Wording"
    ],
    [
      "reports",
      "Reports"
    ],
    [
      "creator_about",
      "Creator"
    ]
  ],
  "equipmentKeys": [
    "vfd",
    "vav",
    "rtu",
    "crac_crah",
    "scada_bms",
    "epms",
    "plc_allen_bradley",
    "mod_cod",
    "switchgear",
    "generator",
    "transformer",
    "ups",
    "kmc_connect",
    "data_center_equipment_facts"
  ]
};

const modules = APP_DATA.modules;
const dashboard = document.getElementById("dashboard");
const content = document.getElementById("content");
const contentBody = document.getElementById("contentBody");
const reportPanel = document.getElementById("reportPanel");
const searchInput = document.getElementById("searchInput");
let deferredPrompt;

function card(key,label){
  const m=modules[key];
  const b=document.createElement("button");
  b.className="card";
  b.innerHTML=`<h3>${label||m.title}</h3><p>${m.summary}</p>`;
  b.onclick=()=>openModule(key);
  return b;
}

function renderDashboard(filter=""){
  dashboard.innerHTML="";
  const q=filter.trim().toLowerCase();
  let keys = q ? Object.keys(modules).filter(k=>{
    const m=modules[k];
    const hay=[m.title,m.summary,...(m.tags||[]),...m.steps.flatMap(s=>[s.name,s.action,s.expected,s.fail])].join(" ").toLowerCase();
    return hay.includes(q);
  }) : APP_DATA.home.map(x=>x[0]);
  keys.forEach(k=>{
    const label = q ? modules[k].title : (APP_DATA.home.find(x=>x[0]===k)||[])[1];
    dashboard.appendChild(card(k,label));
  });
  if(!keys.length){
    dashboard.innerHTML='<p>No exact match. Try terms like VFD, alarm, null, SCADA, MOD, KMC, generator, override.</p>';
  }
}

function openModule(key){
  const m=modules[key]; if(!m)return;
  dashboard.classList.add("hidden"); reportPanel.classList.add("hidden"); content.classList.remove("hidden");
  let extra="";
  if(key==="equipment_index"){
    extra = `<div class="grid mini">${APP_DATA.equipmentKeys.map(k=>`<button class="card" onclick="openModule('${k}')"><h3>${modules[k].title}</h3><p>${modules[k].summary}</p></button>`).join("")}</div>`;
  }
  contentBody.innerHTML=`
    <h2>${m.title}</h2>
    <p>${m.summary}</p>\n    <div class="ownerStamp"><strong>Created by O. Upshur</strong><br>CIM Tech Specialist • Version 6.0</div>\n    <div>${(m.tags||[]).map(t=>`<span class="badge">${t}</span>`).join("")}</div>
    ${extra}
    ${m.steps.map((s,i)=>`
      <article class="step">
        <div class="kicker">Step ${i+1}</div>
        <h3>${s.name}</h3>
        <p><b>Action:</b> ${s.action}</p>
        <p><b>Expected:</b> ${s.expected}</p>
        <p><b>If it fails:</b> ${s.fail}</p>
        <div class="checks"><button onclick="mark(this,'PASS')">PASS</button><button class="fail" onclick="mark(this,'FAIL')">FAIL</button><button class="warn" onclick="mark(this,'N/A')">N/A</button></div>
      </article>`).join("")}
    <p class="small">Reminder: Site MOPs, drawings, SOO, manufacturer procedures, and authorized direction override general app guidance.</p>
  `;
  window.scrollTo(0,0);
}

function mark(btn,status){
  [...btn.parentElement.children].forEach(x=>{x.style.opacity=.4; x.textContent=x.textContent.replace(" ✓","")});
  btn.style.opacity=1; btn.textContent=status+" ✓";
}

document.getElementById("backBtn").onclick=()=>{content.classList.add("hidden");dashboard.classList.remove("hidden")};
document.getElementById("topBtn").onclick=()=>window.scrollTo(0,0);
document.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openModule(b.dataset.open));

searchInput.oninput=e=>{content.classList.add("hidden");reportPanel.classList.add("hidden");dashboard.classList.remove("hidden");renderDashboard(e.target.value)};

function reports(){return JSON.parse(localStorage.getItem("cimProReports")||"[]")}
function saveReports(r){localStorage.setItem("cimProReports",JSON.stringify(r))}
function showReports(){
  const box=document.getElementById("savedReports");
  const r=reports();
  box.innerHTML=r.length?r.map(x=>`<div class="reportItem">${x}</div>`).join(""):"<p>No saved reports yet.</p>";
}
document.querySelectorAll("[data-report]").forEach(b=>b.onclick=()=>{dashboard.classList.add("hidden");content.classList.add("hidden");reportPanel.classList.remove("hidden");showReports();window.scrollTo(0,0)});
document.getElementById("reportBackBtn").onclick=()=>{reportPanel.classList.add("hidden");dashboard.classList.remove("hidden")};
document.getElementById("saveReport").onclick=()=>{
  const now=new Date().toLocaleString();
  const fields=["System","Test","Status","Expected","Actual","Checks","Next"];
  const vals=[
    document.getElementById("reportSystem").value,
    document.getElementById("reportTest").value,
    document.getElementById("reportStatus").value,
    document.getElementById("reportExpected").value,
    document.getElementById("reportActual").value,
    document.getElementById("reportChecks").value,
    document.getElementById("reportNext").value
  ];
  const txt=`Date: ${now}
System/Equipment: ${vals[0]}
Test/Issue: ${vals[1]}
Status: ${vals[2]}
Expected Result: ${vals[3]}
Actual Result: ${vals[4]}
Checks Completed: ${vals[5]}
Next Action/Owner: ${vals[6]}
Prepared by: O. Upshur
Role: CIM Tech Specialist
App Version: 6.0`;
  const r=reports(); r.unshift(txt); saveReports(r); showReports();
};
document.getElementById("exportReport").onclick=async()=>{
  const text=reports().join("\n\n----------------\n\n")||"No reports saved.";
  if(navigator.share){try{await navigator.share({title:"CIM Pro Field Reports",text})}catch(e){}}
  else{await navigator.clipboard.writeText(text); alert("Reports copied to clipboard.")}
};
document.getElementById("clearReports").onclick=()=>{if(confirm("Clear all saved reports on this device?")){saveReports([]);showReports()}};

window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;document.getElementById("installBtn").classList.remove("hidden")});
document.getElementById("installBtn").onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt(); deferredPrompt=null}};
if("serviceWorker" in navigator){navigator.serviceWorker.register("sw.js")}
renderDashboard();
