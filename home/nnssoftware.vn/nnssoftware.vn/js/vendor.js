var csrf = $("meta[name='csrf-token']").attr("content");
var spin = '<i class="fa-solid fa-spinner fa-spin"></i>';
$("form[method=post]").submit(function(e) {
    $(this).find("button[type=submit]").attr("disabled", true);
});
$(".table").DataTable({
    responsive: true,
    language: {
        url: "https://cdn.datatables.net/plug-ins/1.12.1/i18n/vi.json",
    },
});
// Read all notification
$("#read_all").click(function(e) {
    e.preventDefault();
    $.get(
        config.route.notification.read_all, {},
        function(data, textStatus, jqXHR) {
            $("#list_noti").each(function(index, element) {
                $(this).find(".notification").addClass("bg-read");
                $("#unread_noti b").html("0");
                $("#unread_noti_count").remove();
            });
        },
        "html"
    );
});
$("#remove_all").click(function(e) {
    e.preventDefault();
    if (confirm("Bạn chắc chắn muốn xóa tất cả thông báo ?")) {
        $.get(
            config.route.notification.remove_all, {},
            function(data, textStatus, jqXHR) {
                $("#unread_noti_count").remove();
                $("#list_noti").empty();
                $("#unread_noti b").html("0");
            },
            "html"
        );
    }
});
$("#show_more").click(function(e) {
    var length = $("#list_noti li").length;
    var btn = $(this);
    btn.html(`${spin} Đang tải thêm thông báo`).attr("disabled", true);
    $.post(
        config.route.notification.show_more, {
            _token: csrf,
            total: length
        },
        function(data, textStatus, jqXHR) {
            $("#unread_noti b").html(data.total_unread);
            $("#unread_noti_count").html(data.total_unread);
            btn.html("Hiện thêm").attr("disabled", false);
            if (length >= data.total) {
                btn.remove();
            }
            for (var i = 0; i < data["data"].length; i++) {
                var name = data["data"][i].name;
                var content = data["data"][i].content;
                var time = data["data"][i].time_created;
                var status = data["data"][i].status == 1 ? "bg-read" : "";
                $("#list_noti")
                    .append(`<li class="notification mb-1 ${status} border-bottom border-top">
                <div class="media">
                  <div class="media-body">
                    <p class="mb-3"><strong>${name}</strong><span class="n-time text-muted"><i
                          class="icon feather icon-clock m-r-10"></i>${time}</span></p>
                    <p>${content}</p>
                  </div>
                </div>
              </li>`);
            }
        },
        "json"
    );
});
// Order delete
$("[name='orderId[]']").click(() => {
    if (
        $(".Vinh_Check").length > 0 &&
        $(".Vinh_Check:checked").length >= $(".Vinh_Check").length
    ) {
        $("#select_all_order").prop("checked", true);
    } else {
        $("#select_all_order").prop("checked", false);
    }
    if ($(".Vinh_Check:checked").length <= 0) {
        $("#DeleteOrders").hide();
    } else {
        $("#DeleteOrders").show();
        $("#DeleteOrders").html(
            $(".Vinh_Check:checked").length >= $(".Vinh_Check").length ?
            "Xóa tất cả đơn hàng đã chọn" :
            `Xóa ${$(".Vinh_Check:checked").length} đơn hàng đã chọn`
        );
    }
});
$("#DeleteOrders").click(function(e) {
    var order_checked = $(".Vinh_Check:checked").length;
    var btn = $(this);
    if (order_checked > 0) {
        if (
            confirm(
                `Bạn có chắc chắn muốn ${
                    order_checked >= $(".Vinh_Check").length
                        ? "xóa tất cả đơn hàng đã chọn"
                        : `xóa ${order_checked} đơn hàng đã chọn`
                } ?`
            )
        ) {
            btn.html("Đang xóa").attr("disabled", true);
            var id_arr = $("input[name='orderId[]']:checked")
                .map(function() {
                    return $(this).val();
                })
                .get();
            $.post(
                config.route.delete.order, {
                    _token: csrf,
                    id: id_arr,
                },
                function(data, textStatus, jqXHR) {
                    var order_checked = $(".Vinh_Check:checked").length;
                    btn.hide();
                    Notiflix.Notify.success(
                        `Đã xóa ${
                            order_checked >= $(".Vinh_Check").length
                                ? "tất cả đơn hàng đã chọn"
                                : `${order_checked} đơn hàng đã chọn`
                        }`
                    );
                    setTimeout(() => {
                        window.location.reload();
                    }, 990);
                },
                "html"
            );
        }
    } else {
        alert("Vui lòng chọn ít nhất 1 đơn hàng để xóa");
    }
});
$("#select_all_order").click(function(e) {
    if ($(this).is(":checked")) {
        $(".Vinh_Check").prop("checked", true);
    } else {
        $(".Vinh_Check").prop("checked", false);
    }
    if ($(".Vinh_Check:checked").length <= 0) {
        $("#DeleteOrders").hide();
    } else {
        $("#DeleteOrders").show();
        $("#DeleteOrders").html(
            $(".Vinh_Check:checked").length >= $(".Vinh_Check").length ?
            "Xóa tất cả đơn hàng đã chọn" :
            `Xóa ${$(".Vinh_Check:checked").length} đơn hàng đã chọn`
        );
    }
});