AIUtil.SetContext Browser("creationtime:=1").Maximize
Wait 3
AIUtil("profile").Click
AIUtil("input", "Username").Type "Mercury"
AIUtil("input", "SPEAKERS").Type "Mercury"
AIUtil("button", "SIGN IN").Click
AIUtil("profile").Click
AIUtil.FindTextBlock("Sign out").Click
